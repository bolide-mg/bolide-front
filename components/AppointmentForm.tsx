"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { putAppointment } from "@/axios/appointment";
import { Appointment } from "@/axios/model/Appointment";
import { Car } from "@/axios/model/Car";
import { getCarById } from "@/axios/car";
import { toast } from "react-toastify";
import { sendEmail } from "@/axios/email";

const emailAdmin = "hello@bolide.mg";

const appointmentSchema = z.object({
  name: z.string().min(1, { message: "Le nom est requis" }),
  firstName: z.string().min(1, { message: "Le prénom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  message: z.string().optional(),
  phone: z.string().min(10, { message: "Le numéro de téléphone est requis" }),
  date: z.date({ message: "La date est requise" }),
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
      const appointmentDate = `${data.date.toISOString().split("T")[0]}T${data.time}:00Z`;

      const car = await getCarById(idCar);

      const response = await putAppointment(
        new Appointment(
          data.name,
          data.firstName,
          data.email,
          data.message || "",
          data.phone,
          appointmentDate,
          "pending",
          car,
        ),
      );

      await sendEmail(JSON.stringify(data));
      toast.success("Rendez-vous pris avec succès");
    } catch (error) {
      toast.error("Erreur lors de la prise de rendez-vous");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full flex flex-col items-center bg-white rounded-lg shadow-md p-8"
    >
      <div className="flex flex-col gap-6 justify-evenly h-full w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 font-semibold">Nom</label>
              <input
                type="text"
                {...register("name")}
                className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 font-semibold">Prénom</label>
              <input
                type="text"
                {...register("firstName")}
                className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.firstName && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 font-semibold">Téléphone</label>
              <input
                type="tel"
                {...register("phone")}
                className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-semibold">Message</label>
          <textarea
            {...register("message")}
            className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
          />
          {errors.message && (
            <p className="error-message text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-gray-700 font-semibold">Date</label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  dateFormat="dd/MM/yyyy"
                />
              )}
            />
            {errors.date && (
              <p className="error-message text-red-500 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-1/2">
            <label className="text-gray-700 font-semibold">Heure</label>
            <input
              type="time"
              {...register("time")}
              className="input-field border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              step="60"
            />
            {errors.time && (
              <p className="error-message text-red-500 text-sm mt-1">
                {errors.time.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="button-primary bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-dark transition-colors duration-300"
        >
          Valider
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
