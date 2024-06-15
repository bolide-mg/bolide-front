import Image from "next/image";
import { Car } from "@/axios/model/Car";
import { FC, useEffect, useState } from "react";
import Divider from "@/components/style/Divider";
import { getImageByCarId } from "@/axios/image";

const Main: FC<{ car: Car }> = ({ car }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    getImageByCarId(car.id).then((r) => {
      setImage(r[0]?.url);
    });
  }, []);

  return (
    <div className="w-full h-64 bg-grey hover:bg-light transition flex border-b">
      <div className="w-3/12 bg-grey overflow-hidden flex justify-center items-center">
        {image ? (
          <Image src={image} height={500} width={500} alt="image" />
        ) : (
          <></>
        )}
      </div>
      <div className="w-3/4 bg-light p-8 flex items-center justify-evenly">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-black text-3xl">{car.name}</p>
          <p className="font-black text-xl">{car.brand}</p>
          <p className="font-black text-xl">{car.motorType}</p>
          <p className="font-bold">Description</p>
          <p>{car.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Price: {car.price}€</p>
          <Divider />
          <a href={`/car/${car.id}`}>
            <button
              type="button"
              className="bg-secondary text-light rounded-md"
            >
              detail
            </button>
          </a>
        </div>
        {/*TODO: more description here*/}
      </div>
    </div>
  );
};

export default Main;
