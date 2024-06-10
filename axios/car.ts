import instance from "@/axios/default";
import axios from "axios";
import { Car } from "@/axios/model/Car";
import {Image} from "@/axios/model/Image";
import {getImageByCarId} from "@/axios/image";

const carAxios = axios.create(instance.defaults);
carAxios.defaults.baseURL += "/car";

export const getAllCar = (): Promise<Car[]> =>
    carAxios.get("").then((r) => r.data);
export const getAllBrand = (): Promise<String[]> =>
    carAxios.get("/brand").then((r) => r.data);
export const getTrendingCar = (): Promise<Car[]> =>
    carAxios.get("/trending").then((r) => r.data);
export const getCarById = (id: typeof Car.prototype.id): Promise<Car> =>
  carAxios.get(`/${id}`).then((r) => r.data);

export const postCar = (car: Car): Promise<Car> =>
  carAxios.post("", car).then((r) => r.data);

export const searchCar = (
  name: string,
  brand: string,
  model: string,
  motorType: string,
): Promise<Car[]> => {
  // Construct the URL with the search parameters
  const searchParams = new URLSearchParams();
  if (name) searchParams.append("name", name);
  if (brand) searchParams.append("brand", brand);
  if (model) searchParams.append("model", model);
  if (motorType) searchParams.append("motorType", motorType);

  const url = `/search?${searchParams.toString()}`;
  // Send the GET request with the search parameters
  return carAxios.get(url).then((r) => r.data);
};

export const searchImageByCarList = async (cars: Car[]): Promise<Image[]> => {
  const result: Image[] = [];
  for (const car of cars) {
    result.push((await getImageByCarId(car.id))[0])
  }
  return result;
}

export default carAxios;
