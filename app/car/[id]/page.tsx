import AppointmentModal from "@/components/Modal/AppointmentModal";
import React, { FC } from "react";
import { getCarById } from "@/axios/car";
import Divider from "@/components/style/Divider";
import { getImageByCarId } from "@/axios/image";
import { Image } from "@/axios/model/Image";
import Carousel from "@/components/Carousel";

const Main: FC<{ params: { id: number } }> = async ({ params }) => {
  const car = await getCarById(params.id);
  let images: Image[] = [];

  try {
    images = await getImageByCarId(params.id);
  } catch {}

  return (
      <>
        <div className="w-full min-h-full p-8 text-text-base">
          <div className="flex w-full justify-evenly">
            <div className="h-96 w-4/5 flex items-center justify-center bg-light rounded-xl">
              <Carousel images={images} />
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
            <h2 className="text-2xl font-bold mb-4">Car Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Name:</p>
                <p>{car.name}</p>
              </div>
              <div>
                <p className="font-bold">ID:</p>
                <p>#{car.id}</p>
              </div>
              <div>
                <p className="font-bold">Brand:</p>
                <p>{car.brand}</p>
              </div>
              <div>
                <p className="font-bold">Model:</p>
                <p>{car.model}</p>
              </div>
              <div>
                <p className="font-bold">Color:</p>
                <p>{car.color}</p>
              </div>
              <div>
                <p className="font-bold">Motor Type:</p>
                <p>{car.motorType}</p>
              </div>
              <div>
                <p className="font-bold">Power:</p>
                <p>{car.power} hp</p>
              </div>
              <div>
                <p className="font-bold">Seating Capacity:</p>
                <p>{car.placeNumber} seats</p>
              </div>
              <div>
                <p className="font-bold">Status:</p>
                <p>{car.status ? "Available" : "Not Available"}</p>
              </div>
              <div>
                <p className="font-bold">Type:</p>
                <p>{car.type}</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Description</h2>
            <p>{car.description}</p>
          </div>
        </div>
      </>
  );
};

export default Main;