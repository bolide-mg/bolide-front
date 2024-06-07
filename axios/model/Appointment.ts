import { Car } from "./Car";

export class Appointment {
  id?: number;
  name: string;
  firstName: string;
  email: string;
  message: string;
  contact: string;
  appointment_date: Date;
  status: string;
  idCar: Car;

  constructor(
    name: string,
    firstName: string,
    email: string,
    message: string,
    contact: string,
    appointment_date: Date,
    status: string,
    car: Car,
    id?: number,
  ) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.message = message;
    this.contact = contact;
    this.appointment_date = appointment_date;
    this.status = status;
    this.idCar = car;
  }
}
