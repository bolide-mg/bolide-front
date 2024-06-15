import instance from "@/axios/default";
import axios from "axios";
import { Image } from "@/axios/model/Image";

const adminAxios = axios.create(instance.defaults);
adminAxios.defaults.baseURL += "/admin";

export const getAdminById = (id: number): Promise<any> =>
  adminAxios
    .get(`/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    })
    .then((r) => r.data);

export default adminAxios;
