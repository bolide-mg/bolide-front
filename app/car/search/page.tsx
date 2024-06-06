"use client";

import { Input } from "@headlessui/react";
import SearchResult from "@/components/SearchResult";
import { useEffect, useState } from "react";
import { Car } from "@/axios/model/Car";
import { searchCar } from "@/axios/car";

const Main = () => {
  const [resultCar, setResultCar] = useState<Car[]>([]);
  const [searchName, setSearchName] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [searchMotorType, setSearchMotorType] = useState("");

  useEffect(() => {
    (async () => {
      const cars = await searchCar(
        searchName,
        searchBrand,
        searchModel,
        searchMotorType,
      );
      setResultCar(cars);
    })();
  }, [searchName, searchBrand, searchModel, searchMotorType]);

  return (
    <>
      <div className="w-full min-h-full bg-white">
        <div className="flex w-full h-16 items-center justify-center">
          <Input
            type="text"
            placeholder="search name"
            className="rounded-md border w-1/4 h-3/4 p-1 mr-2"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="search brand"
            className="rounded-md border w-1/4 h-3/4 p-1 mr-2"
            onChange={(e) => setSearchBrand(e.target.value)}
          />
          <Input
            type="text"
            placeholder="search model"
            className="rounded-md border w-1/4 h-3/4 p-1 mr-2"
            onChange={(e) => setSearchModel(e.target.value)}
          />
          <Input
            type="text"
            placeholder="search motor type"
            className="rounded-md border w-1/4 h-3/4 p-1"
            onChange={(e) => setSearchMotorType(e.target.value)}
          />
        </div>
        <div className="min-h-full flex justify-center py-5">
          <div className="min-h-96 w-full md:w-3/4 md:rounded-xl flex items-center border flex-col overflow-hidden">
            {resultCar.length === 0
              ? "no result"
              : resultCar.map((car) => (
                  <SearchResult key={Math.random()} car={car} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
