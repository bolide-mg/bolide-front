"use client";

import { Input } from "@headlessui/react";
import SearchResult from "@/components/SearchResult";
import { useEffect, useState } from "react";
import { Car } from "@/axios/model/Car";
import {getAllCar, searchCar} from "@/axios/car";
import useSearch from "@/hooks/useSearch";

const Main = () => {
  const [resultCar, setResultCar] = useState<Car[]>([]);
  const searchName = useSearch("", 1000);
  const searchBrand = useSearch("", 1000);
  const searchModel = useSearch("", 1000);
  const searchMotorType = useSearch("", 1000);

  useEffect(() => {
    if (searchName.textToSearch == "" && searchBrand.textToSearch =="" && searchModel.textToSearch == "" && searchMotorType.textToSearch == ""){
      getAllCar().then(r=>setResultCar(r))
    } else {
      searchCar(searchName.textToSearch, searchBrand.textToSearch, searchModel.textToSearch, searchMotorType.textToSearch).then(r=>setResultCar(r))
    }
  }, [
    searchName.text, searchBrand.text, searchModel.text, searchMotorType.text,
    searchName.textToSearch, searchBrand.textToSearch, searchModel.textToSearch, searchMotorType.textToSearch,
  ]);

  return (
    <>
      <div className="w-full min-h-full bg-white">
        <div className="flex w-full h-16 items-center justify-center gap-2 mx-2">
          <Input
            type="text"
            placeholder="search by name"
            className="rounded-md border w-1/4 h-3/4 p-1"
            onChange={searchName.onChange}
          />
          <Input
            type="text"
            placeholder="search by brand"
            className="rounded-md border w-1/4 h-3/4 p-1"
            onChange={searchBrand.onChange}
          />
          <Input
            type="text"
            placeholder="search by model"
            className="rounded-md border w-1/4 h-3/4 p-1"
            onChange={searchModel.onChange}
          />
          <Input
            type="text"
            placeholder="search by motor type"
            className="rounded-md border w-1/4 h-3/4 p-1"
            onChange={searchMotorType.onChange}
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
