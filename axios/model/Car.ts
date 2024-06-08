export class Car {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  motorType: string;
  power: number;
  placeNumber: number;
  status: number;
  type: string;

  constructor(
    id: number,
    name: string,
    description: string,
    brand: string,
    model: string,
    price: number,
    color: string,
    motorType: string,
    power: number,
    placeNumber: number,
    status: number,
    type: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.motorType = motorType;
    this.power = power;
    this.placeNumber = placeNumber;
    this.status = status;
    this.type = type;
  }
}
