import instance from "@/axios/default";
import axios from "axios";
import {Image} from "@/axios/model/Image";

const imageAxios = axios.create(instance.defaults)
imageAxios.defaults.baseURL += "/images"

export const getImageById = (id: typeof Image.prototype.id): Promise<Image> => imageAxios.get(`/${id}`)
    .then(r=>r.data);

export const getImageByCarId = (id: typeof Image.prototype.car_id): Promise<Image[]> => imageAxios.get(`/car/${id}`)
    .then(r=>r.data);

export default imageAxios;