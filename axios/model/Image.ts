import { Car } from "@/axios/model/Car";

export class Image {
  id: number;
  file_name: string;
  car_id: typeof Car.prototype.id;
  url: string;

  constructor(
    id: number,
    file_name: string,
    car_id: typeof Car.prototype.id,
    url: string,
  ) {
    this.id = id;
    this.file_name = file_name;
    this.car_id = car_id;
    this.url = url;
  }
}
