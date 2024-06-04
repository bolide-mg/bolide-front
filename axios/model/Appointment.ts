export class Appointment {
  id: number;
  name: string;
  first_name: string;
  email: string;
  message: string;
  contact: string;
  appointment_date: Date;
  status: string;
  id_car: number;

  constructor(
    id: number,
    name: string,
    first_name: string,
    email: string,
    message: string,
    contact: string,
    appointment_date: Date,
    status: string,
    id_car: number,
  ) {
    this.id = id;
    this.name = name;
    this.first_name = first_name;
    this.email = email;
    this.message = message;
    this.contact = contact;
    this.appointment_date = appointment_date;
    this.status = status;
    this.id_car = id_car;
  }
}
