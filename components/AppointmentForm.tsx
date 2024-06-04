"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { putAppointment } from "@/axios/appointment";
import { Appointment } from "@/axios/model/Appointment";
import { Car } from "@/axios/model/Car";

const emailAdmin = "hello@bolide.mg";

const appointmentSchema = z.object({
  name: z.string().min(1, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(10, { message: "Le numéro de téléphone est requis" }),
  date: z.date({ required_error: "La date est requise" }),
  time: z.string().min(1, { message: "L'heure est requise" }),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentForm: React.FC<{ idCar: typeof Car.prototype.id }> = ({
  idCar,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit: SubmitHandler<AppointmentFormValues> = async (data) => {
    try {
      const response = await putAppointment(
        new Appointment(
          data.name,
          data.name,
          data.email,
          "",
          data.phone,
          data.date,
          "",
          idCar,
        ),
      );

      await fetch("/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, emailAdmin }),
      });
      alert("Rendez-vous pris avec succès");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la prise de rendez-vous");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label>Nom</label>
        <input type="text" {...register("name")} className="input-field" />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col">
        <label>Email</label>
        <input type="email" {...register("email")} className="input-field" />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label>Téléphone</label>
        <input type="tel" {...register("phone")} className="input-field" />
        {errors.phone && (
          <p className="error-message">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label>Date</label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              className="input-field"
              dateFormat="dd/MM/yyyy"
            />
          )}
        />
        {errors.date && <p className="error-message">{errors.date.message}</p>}
      </div>

      <div className="flex flex-col">
        <label>Heure</label>
        <input
          type="time"
          {...register("time")}
          className="input-field"
          step="60"
        />
        {errors.time && <p className="error-message">{errors.time.message}</p>}
      </div>

      <button type="submit" className="button-primary">
        Valider
      </button>
    </form>
  );
};

export default AppointmentForm;
