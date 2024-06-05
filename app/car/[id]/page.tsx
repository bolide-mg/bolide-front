import AppointmentModal from "@/components/Modal/AppointmentModal";
import { FC } from "react";

const Main: FC<{ params: { id: number } }> = ({ params }) => {
  //TODO: Fill this about components with the about XD... of a car

  return (
    <>
      <div className="w-full h-full p-8 text-text-base">
        <div className="flex w-full justify-evenly">
          <div className="h-96 w-4/5 flex items-center justify-center bg-light rounded-xl">
            image
          </div>
          <div className="w-52 bg-light flex flex-col items-center p-8 gap-8 rounded">
            <p className="font-bold">This car</p>
            <div>
              <p>Price: </p><p className="font-mono">123.00€</p>
            </div>
            <div className="w-full border border-dark"></div>
            <p className="font-bold">Actions</p>
            <AppointmentModal idCar={params.id}/>
          </div>
        </div>
        <div>description</div>
      </div>
    </>
  );
};

export default Main;
