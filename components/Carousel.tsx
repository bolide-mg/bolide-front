"use client"

import React, {FC, useState} from "react";
import {Image as IModel} from "@/axios/model/Image";
import Image from "next/image";

const Main: FC<{ images: IModel[] }> = ({ images }) => {
  const [idCarousel, setIdCarousel] = useState(0);

  const modify = (q: number) => {
    setIdCarousel((idCarousel + 1) % images.length)
  }

  const carouselDisplay = {
    next: ()=>modify(1),
    prev: () => modify(-1)
  }

  return (
      <div className="relative w-full h-full">
        <div>
          {
            images.length == 0 ?
                "No images" :
                <a href={`/car/${images[idCarousel].car.id}`}><Image src={images[idCarousel]?.url}
                                                                  width={1000}
                                                                  height={1000}
                                                                  className="absolute w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                                  alt="..."
                /></a>
          }
        </div>
        <div className="absolute bottom-0 w-full">
          <p className="text-center">{idCarousel}</p>
        </div>
        <button type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={carouselDisplay.prev}>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
        </button>
        <button type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={carouselDisplay.next}>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
        </button>
      </div>
  )
}

export default Main;