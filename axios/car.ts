import instance from "@/axios/default";
import axios from "axios";
import {Car} from "@/axios/model/Car";

const carAxios = axios.create(instance.defaults)
carAxios.defaults.baseURL += "/car"

export const getAllCar = (): Promise<Car[]> => carAxios.get("")
    .then(r=>r.data);

export const getCarById = (id: typeof Car.prototype.id): Promise<Car> => carAxios.get(`/${id}`)
    .then(r=>r.data);

export const postCar = (car: Car): Promise<Car> => carAxios.post("", car)
    .then(r=>r.data);

export const searchCar = (
    name: string,
    brand: string,
    model: string,
    motorType: string
): Promise<Car[]> => carAxios.get("/search", {
    params: {name, brand, model, motorType},
}).then(r=>r.data)

export default carAxios;