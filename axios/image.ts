import instance from "@/axios/default";
import axios from "axios";
import { Image } from "@/axios/model/Image";
import { toast } from "react-toastify";

const imageAxios = axios.create(instance.defaults);
imageAxios.defaults.baseURL += "/images";

export const getImageById = (id: typeof Image.prototype.id): Promise<Image> =>
  imageAxios
    .get(`/${id}`)
    .then((r) => r.data)
    .catch((err) => {
      toast.error(`Image with id: ${id} not found`);
    });

export const getImageByCarId = (
  id: typeof Image.prototype.car.id,
): Promise<Image[]> =>
  imageAxios
    .get(`/car/${id}`)
    .then((r) => r.data)
    .catch((err) => {
      toast.error(`No images found for the car: ${id}`);
    });

export default imageAxios;
