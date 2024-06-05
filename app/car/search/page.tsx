"use client";

import { Input } from "@headlessui/react";
import SearchResult from "@/components/SearchResult";
import { useEffect, useState } from "react";
import { Car } from "@/axios/model/Car";
import { searchCar } from "@/axios/car";

const Main = () => {
  const [resultCar, setResultCar] = useState<Car[]>([Car.prototype]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => setResultCar(await searchCar(search, "", "", "")))();
    // TODO: add brand, model, motor type
  }, [search]);

  return (
    <>
      <div className="w-full min-h-full bg-white">
        <div className="flex w-full h-16 items-center justify-center">
          <Input
            type="text"
            placeholder="search"
            className="rounded-md border w-1/2 h-3/4 p-1"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="min-h-full flex justify-center py-5">
          <div className="min-h-96 w-full md:w-3/4 md:rounded-xl flex items-center border flex-col overflow-hidden">
            {resultCar.length == 0
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
