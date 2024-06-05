import AppointmentModal from "@/components/Modal/AppointmentModal";
import { FC } from "react";
import { getCarById } from "@/axios/car";
import Divider from "@/components/style/Divider";

const Main: FC<{ params: { id: number } }> = async ({ params }) => {
  //TODO: Fill this about components with the about XD... of a car
  const car = await getCarById(params.id);

  return (
    <>
      <div className="w-full min-h-full p-8 text-text-base">
        <div className="flex w-full justify-evenly">
          <div className="h-96 w-4/5 flex items-center justify-center bg-light rounded-xl">
            image
          </div>
          <div className="w-52 bg-light flex flex-col items-center p-8 gap-8 rounded">
            <p className="font-bold">This car</p>
            <div>
              <p>Price: </p>
              <p className="font-mono">{car.price}€</p>
            </div>
            <Divider />
            <p className="font-bold">Actions</p>
            <AppointmentModal idCar={params.id} />
          </div>
        </div>
        <div className="p-8">
          <p className="font-bold">Description</p>
          <p className="">Name: {car.name}</p>
          <p className="">#{car.id}</p>
          <p className="">Description</p>
          <p>{car.description}</p>
          <p className="">Brand: {car.brand}</p>
          <p className="">Model: {car.model}</p>
          <p className="">Color: {car.color}</p>
          <p className="">Motor Type: {car.motor_type}</p>
          <p className="">Power: {car.power}</p>
          <p className="">Place Number: {car.place_number}</p>
          <p className="">Status: {car.status}</p>
          <p className="">Type: {car.type}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
