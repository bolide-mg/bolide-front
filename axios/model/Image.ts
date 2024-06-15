import { Car } from "@/axios/model/Car";

export class Image {
  id: number;
  file_name: string;
  car: Car;
  url: string;

  constructor(id: number, file_name: string, car_id: Car, url: string) {
    this.id = id;
    this.file_name = file_name;
    this.car = car_id;
    this.url = url;
  }
}
