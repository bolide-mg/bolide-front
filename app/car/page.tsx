import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LinkMainPage from "@/components/LinkMainPage";
import Carousel from "@/components/Carousel";
import { Car } from "@/axios/model/Car";
import { Image as imageModel } from "@/axios/model/Image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import car, {
  getAllBrand,
  getTrendingCar,
  searchImageByCarList,
} from "@/axios/car";
import { getImageByCarId } from "@/axios/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Section = ({
  text,
  reverted,
  image,
}: {
  text: React.ReactNode;
  reverted?: boolean;
  image?: string | StaticImport;
}) => (
  <div
    className={`w-4/5 bg-light rounded-xl flex flex-col items-center ${reverted ? "md:flex-row-reverse" : "md:flex-row"}`}
  >
    {image ? (
      <Image
        width={300}
        height={120}
        className="h-80 p-16 md:p-8"
        src={image || ""}
        alt="prix value"
      />
    ) : (
      <></>
    )}
    <div
      className={`${image ? "w-full md:w-3/5" : "w-full"} px-8 py-16 md:p-16`}
    >
      {text}
    </div>
  </div>
);

const Main = async () => {
  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      // await emailjs.send(
      //     'YOUR_SERVICE_ID',
      //     'YOUR_TEMPLATE_ID',
      //     templateParams,
      //     'YOUR_PUBLIC_KEY'
      // );

      console.log("Email sent successfully!");
      // reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  let brandList: String[] = [];
  let trendList: Car[] = [];
  let carList: Car[] = [];
  let imageList: imageModel[] = [];

  try {
    brandList = await getAllBrand();
    trendList = await getTrendingCar();
    carList = await getTrendingCar();
    // carMapped = carList.map(car => car.id);
    for (const car of carList) {
      await getImageByCarId(car.id);
    }
    // imageList = await getImageByCarId(carList.map());
  } catch {}
  return (
    <>
      <BackgroundImage />
      <div className="h-full w-screen flex justify-center items-center flex-col">
        <p className="text-7xl md:text-9xl font-bold">Welcome</p>
        <p className="text-7xl md:text-9xl font-bold text-primary">Bolide</p>
        <div className="drop-shadow text-light flex flex-col px-12 gap-6">
          <div>
            <h1>Le concessionnaire de vos voitures de sport</h1>
            <p>depuis 2005</p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/car/search">
              <button className="button-primary">Rechercher</button>
            </Link>
            {/*<Link href="/admin">*/}
            {/*  <button className="button-primary">Se connecter</button>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full items-center pb-8">
        <Section
          text={
            <>
              <LinkMainPage />
              <br />
              <p>
                Nous comprenons que l`achat d`une voiture est une décision
                importante.
              </p>
              <br />
              <p>
                C`est pourquoi nous nous engageons à vous offrir une expérience
                d`achat simple, transparente et sans stress.
              </p>
            </>
          }
          image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
          reverted
        />
        <Section
          text={
            <>
              <p>
                Avec notre large sélection de véhicules neufs et d`occasion,
                vous êtes sûr de trouver la voiture de vos rêves au meilleur
                prix.
              </p>
            </>
          }
          image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
        />
        <div
          id="catalogue"
          className="w-screen min-h-screen py-12 flex flex-col gap-8 text-center bg-light justify-center"
        >
          <h1>Notre catalogue</h1>
          <div id="brands">
            <h2>Nos marques</h2>
            {brandList.length > 0 && (
              <div className="flex flex-wrap justify-center">
                {brandList.map((brand) => (
                  <Link
                    key={brand.toString()}
                    href={`/car/search?brand=${brand}`}
                    className="m-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div id="carShow">
            <h2>Car Show</h2>
            <div className="h-96 relative">
              {trendList.length > 0 ? (
                <Carousel images={await searchImageByCarList(trendList)} />
              ) : (
                <p>No cars trending currently</p>
              )}
            </div>
          </div>
        </div>
        <Section
          text={
            <>
              <p className="font-semibold">
                Pourquoi choisir <LinkMainPage /> ?
              </p>
            </>
          }
          image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
          reverted
        />
        <Section
          text={
            <>
              <ul className="list-decimal">
                <li>
                  <p className="font-semibold">Large Sélection de Véhicules</p>
                  Que vous recherchiez une citadine économique, un SUV spacieux,
                  ou une voiture de sport, nous avons quelque chose pour tout le
                  monde.
                </li>
                <br />
                <li>
                  <p className="font-semibold">Prix Compétitifs</p>
                  Grâce à nos partenariats avec les principaux constructeurs et
                  notre réseau de fournisseurs, nous offrons des prix
                  imbattables sur tous nos véhicules.
                </li>
                <br />
                <li>
                  <p className="font-semibold">Qualité et Fiabilité</p>
                  Chaque voiture passe par une inspection rigoureuse avant
                  d`être mise en vente, vous garantissant ainsi des véhicules
                  fiables et en parfait état.
                </li>
              </ul>
            </>
          }
        />
        <Section
          text={
            <>
              <p className="font-semibold">À propos de nous</p>
              <br />
              <p>
                Nous sommes passionnée par l'automobile et dédiée à fournir des
                véhicules de qualité à des prix compétitifs. Notre équipe est là
                pour vous conseiller et vous accompagner tout au long de votre
                achat.
              </p>
              <br />
              <p>
                Notre mission est de rendre l'achat de voiture aussi simple et
                agréable que possible, en mettant l'accent sur la transparence
                et la satisfaction du client.
              </p>
            </>
          }
          image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </>
  );
};

export default Main;
