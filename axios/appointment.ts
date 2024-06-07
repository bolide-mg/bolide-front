import instance from "@/axios/default";
import axios from "axios";
import { Appointment } from "@/axios/model/Appointment";
import {toast} from "react-toastify";

const appointmentAxios = axios.create(instance.defaults);
appointmentAxios.defaults.baseURL += "/appointment";

export const putAppointment = (
  appointment: Appointment,
): Promise<Appointment> =>
  appointmentAxios
    .put("", appointment)
    .then((r) => r.data)
    .catch((err) => {
      toast.error("Failed to save appointment");
    });

export default appointmentAxios;
