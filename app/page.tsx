import { NextPage } from "next";
import Link from 'next/link'

const Home: NextPage = () =>
    <>
        <nav className="px-4 py-2 flex justify-between align-center bg-[#141414] bg-opacity-25 backdrop-blur overflow-hidden fixed w-full shadow-2xl">
            <span className="text-3xl font-bold text-[#EBEBEB]">bolide.mg</span>
            <Link href="/admin"><button className="button-primary">Se connecter</button></Link>
        </nav>
        <main className="pt-12 bg-[#fcbf49]">
            <div id="hero" className="h-screen p-4 flex flex-col items-center">
                <h1>Votre concessionnaire automobile préféré</h1>
            </div>
            <div id="catalogue" className="h-screen p-4 bg-[#d62828]">
                <h1>Notre catalogue</h1>
                <div id="brands">
                    <h2>Nos marques</h2>
                    <p>Mazda, Toyota, GMC</p>
                </div>
                <div id="carShow">
                    <h2>Car Show</h2>
                </div>
            </div>
        </main>
        <footer className="h-[60vh] p-4 flex flex-row gap-4 bg-[#f77f00]">
            <div>
                <h1>Contact</h1>
                <div className="m-auto flex flex-col gap-2">
                    <p>Mail : <a href="#" >hello@bolide.mg</a></p>
                    <p>Telephone : +261 32 00 000 80</p>
                    <p>Adresse : LOT IVE 92 Behoririka, Antananarivo 101, Madagascar BP3779</p>
                    <div>
                        <p>Du Lundi au Vendredi de 8h00 / 12h00 à 14h00 / 18h00</p>
                        <p>Le Samedi de 9h à 12h</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Nous contacter</h1>
            </div>
        </footer>
    </>

export default Home;
