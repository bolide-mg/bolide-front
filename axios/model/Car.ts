export class Car {
    id: number;
    name: string;
    description: string;
    brand: string;
    model: string;
    price: number;
    color: string;
    motor_type: string;
    power: number;
    place_number: number;
    status: number;
    type: string;

    constructor(id: number, name: string, description: string, brand: string, model: string, price: number, color: string, motor_type: string, power: number, place_number: number, status: number, type: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.motor_type = motor_type;
        this.power = power;
        this.place_number = place_number;
        this.status = status;
        this.type = type;
    }
}
