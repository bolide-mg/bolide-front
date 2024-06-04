import { Car } from "@/axios/model/Car";

export class Image {
  id: number;
  car_id: typeof Car.prototype.id;
  url: string;

  constructor(id: number, car_id: typeof Car.prototype.id, url: string) {
    this.id = id;
    this.car_id = car_id;
    this.url = url;
  }
}
