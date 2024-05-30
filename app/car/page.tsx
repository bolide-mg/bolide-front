import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";

const Section = ({ text, reverted } : { text: React.ReactNode, reverted?: boolean }) => (
    <div className={`w-4/5 bg-base rounded-xl flex flex-col items-center ${reverted ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Image
            width={300}
            height={120}
            className="h-80 p-16 md:p-8"
            src="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
            alt="prix value"/>
        <div className="w-3/5 px-8 py-16 md:p-16">
            {text}
        </div>
    </div>
)

const Main = () => {
    return (
        <>
            <BackgroundImage/>
            <div className="h-screen w-screen flex justify-center items-center flex-col">
                <p className="text-9xl font-bold">Welcome</p>
                <p className="text-9xl font-bold text-primary">Bolide</p>
            </div>
            <div className="w-full flex flex-col gap-20">
                <div className="w-screen flex justify-center items-center flex-col gap-20 text-text-base">
                    <div className="w-4/5 bg-opacity-grey rounded-xl backdrop-blur flex flex-col items-center py-16 gap-16">
                        <Section
                            text={<>
                                <p className="font-semibold">Bolide</p>
                                <br/>
                                <p>Nous comprenons que l`achat d`une voiture est une décision importante.</p>
                                <br/>
                                <p>C`est pourquoi nous nous engageons à vous offrir une expérience d`achat simple,
                                    transparente
                                    et sans stress.</p>
                            </>}
                            reverted
                        />
                        <Section
                            text={<>
                                <p>Avec notre large sélection de véhicules neufs et d`occasion, vous êtes sûr de trouver la
                                    voiture de vos rêves au meilleur prix.</p>
                            </>}
                        />
                    </div>
                </div>
                <div className="w-screen flex justify-center items-center flex-col gap-20 text-text-base">
                    <div className="w-4/5 bg-opacity-grey rounded-xl backdrop-blur flex flex-col items-center py-16 gap-16">
                        <Section
                            text={<>
                                <p className="font-semibold">Pourquoi choisir Bolide ?</p>
                                <ul className="list-disc">
                                    <li>Large Sélection de Véhicules
                                        Que vous recherchiez une citadine économique, un SUV spacieux, ou une voiture de sport, nous avons quelque chose pour tout le monde.</li>
                                    <li>Prix Compétitifs
                                        Grâce à nos partenariats avec les principaux constructeurs et notre réseau de fournisseurs, nous offrons des prix imbattables sur tous nos véhicules.</li>
                                </ul>
                            </>}
                            reverted
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
