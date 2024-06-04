import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/img/2024-AMG-CLE-COUPE.webp";
import AppointmentForm from "@/components/AppointmentForm";

const Home: NextPage = () => (
  <>
    <nav className="px-32 py-2 flex justify-between align-center bg-dark bg-opacity-50 backdrop-blur overflow-hidden fixed w-full shadow-2xl z-20">
      <Link href="/">
        <span className="text-3xl font-bold text-light">bolide.mg</span>
      </Link>
      <Link href="/admin">
        <button className="button-primary">Se connecter</button>
      </Link>
    </nav>
    <main className="px-32 py-8 font-medium">
      <div
        id="hero"
        className="h-lvh flex flex-col items-center justify-center"
      >
        <Image
          src={heroImage}
          priority
          width={2400}
          height={900}
          alt="2024-AMG-CLE-COUPE"
          placeholder="blur"
          className="-z-10 h-screen absolute overflow-hidden aspect-square top-0"
        />
        <div className="drop-shadow text-light flex flex-col px-12 gap-6">
          <div>
            <h1>Le concessionnaire de vos voitures de sport</h1>
            <p>depuis 2005</p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/">
              <button className="button-primary">Prendre rendez-vous</button>
            </Link>
            <Link href="/admin">
              <button className="button-primary">Se connecter</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="catalogue"
        className="h-screen py-12 flex flex-col gap-8 text-center"
      >
        <h1>Notre catalogue</h1>
        <div id="brands">
          <h2>Nos marques</h2>
          <p>Mazda, Toyota, GMC, Citroen, Mercedes Benz AMG, Porsche</p>
        </div>
        <div id="carShow">
          <h2>Car Show</h2>
          <div>TODO: Carousel with car cards</div>
        </div>
      </div>
    </main>
    <footer className="h-screen px-32 py-24 flex flex-row gap-8 bg-dark text-light font-medium">
      <div>
        <h1>Nous contacter</h1>
        <div className="m-auto flex flex-col gap-2">
          <p>Mail : hello@bolide.mg</p>
          <p>Telephone : +261 32 00 000 80</p>
          <p>
            Adresse : LOT IVE 92 Behoririka, Antananarivo 101, Madagascar BP3779
          </p>
          <div>
            <p>Du Lundi au Vendredi de 8h00 / 12h00 à 14h00 / 18h00</p>
            <p>Le Samedi de 9h à 12h</p>
          </div>
        </div>
      </div>
      <div className="mx-10">
        <h1>Prendre rendez-vous</h1>
        <AppointmentForm />
      </div>
    </footer>
  </>
);

export default Home;
