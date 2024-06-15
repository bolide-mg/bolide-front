"use client";

import { Input } from "@headlessui/react";
import SearchResult from "@/components/SearchResult";
import { useEffect, useState } from "react";
import { Car } from "@/axios/model/Car";
import { getAllCar, searchCar, searchCarByPrice } from "@/axios/car";
import useSearch from "@/hooks/useSearch";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const [resultCar, setResultCar] = useState<Car[]>([]);
  const searchName = useSearch("", 1000);
  const searchBrand = useSearch(brand || "", 1000);
  const searchModel = useSearch("", 1000);
  const searchMotorType = useSearch("", 1000);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    if (
      searchName.textToSearch == "" &&
      searchBrand.textToSearch == "" &&
      searchModel.textToSearch == "" &&
      searchMotorType.textToSearch == "" &&
      minPrice === 0 &&
      maxPrice === 0
    ) {
      getAllCar().then((r) => setResultCar(r));
    } else if (minPrice > 0 || maxPrice > 0) {
      searchCarByPrice(minPrice, maxPrice).then((r) => setResultCar(r));
    } else {
      searchCar(
        searchName.textToSearch,
        searchBrand.textToSearch,
        searchModel.textToSearch,
        searchMotorType.textToSearch,
      ).then((r) => setResultCar(r));
    }
  }, [
    searchName.textToSearch,
    searchBrand.textToSearch,
    searchModel.textToSearch,
    searchMotorType.textToSearch,
    minPrice,
    maxPrice,
  ]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(parseInt(value));
    } else {
      setMaxPrice(parseInt(value));
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-white">
        <div className="flex w-full h-16 items-center justify-center gap-2 mx-2">
          <Input
            type="text"
            placeholder="search by name"
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={searchName.onChange}
          />
          <Input
            type="text"
            placeholder="search by brand"
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={searchBrand.onChange}
            defaultValue={brand || ""}
          />
          <Input
            type="text"
            placeholder="search by model"
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={searchModel.onChange}
          />
          <Input
            type="text"
            placeholder="search by motor type"
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={searchMotorType.onChange}
          />
        </div>
        <div className="flex justify-center my-4">
          <div className="flex items-center gap-4">
            <label className="font-semibold">Price Range:</label>
            <Input
              type="number"
              placeholder="Min Price"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              name="minPrice"
              value={minPrice}
              onChange={handlePriceChange}
            />
            <Input
              type="number"
              placeholder="Max Price"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              name="maxPrice"
              value={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
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
