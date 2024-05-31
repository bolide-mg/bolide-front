import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import LinkMainPage from "@/components/LinkMainPage";

const Section = ({
     text,
     reverted,
     image
} : {
    text: React.ReactNode,
    reverted?: boolean,
    image?: string | StaticImport
}) => (
    <div className={`w-4/5 bg-base rounded-xl flex flex-col items-center ${reverted ? "md:flex-row-reverse" : "md:flex-row"}`}>
        {
            image ?
            <Image
            width={300}
            height={120}
            className="h-80 p-16 md:p-8"
            src={image || ""}
            alt="prix value"/> : <></>
        }
        <div className={`${image ? "w-full md:w-3/5" : "w-full"} px-8 py-16 md:p-16`}>
            {text}
        </div>
    </div>
)

const Main = () => {
    return (
        <>
            <BackgroundImage/>
            <div className="h-full w-screen flex justify-center items-center flex-col">
                <p className="text-7xl md:text-9xl font-bold">Welcome</p>
                <p className="text-7xl md:text-9xl font-bold text-primary">Bolide</p>
            </div>
            <div className="w-full flex flex-col gap-20">
                <div className="w-screen flex justify-center items-center flex-col gap-20 text-text-base">
                    <div className="md:w-4/5 bg-opacity-grey rounded-xl backdrop-blur flex flex-col items-center py-16 gap-16">
                        <Section
                            text={<>
                                <LinkMainPage />
                                <br/>
                                <p>Nous comprenons que l`achat d`une voiture est une décision importante.</p>
                                <br/>
                                <p>C`est pourquoi nous nous engageons à vous offrir une expérience d`achat simple,
                                    transparente
                                    et sans stress.</p>
                            </>}
                            image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
                            reverted
                        />
                        <Section
                            text={<>
                                <p>Avec notre large sélection de véhicules neufs et d`occasion, vous êtes sûr de trouver la
                                    voiture de vos rêves au meilleur prix.</p>
                            </>}
                            image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
                        />
                    </div>
                </div>
                <div className="w-screen flex justify-center items-center flex-col gap-20 text-text-base">
                    <div className="md:w-4/5 bg-opacity-grey rounded-xl backdrop-blur flex flex-col items-center py-16 gap-16">
                        <Section
                            text={<>
                                <p className="font-semibold">Pourquoi choisir <LinkMainPage /> ?</p>
                            </>}
                            image="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
                            reverted
                        />
                        <Section
                            text={<>
                                <ul className="list-decimal">
                                    <li><p className="font-semibold">Large Sélection de Véhicules</p>
                                        Que vous recherchiez une citadine économique, un SUV spacieux, ou une voiture de
                                        sport, nous avons quelque chose pour tout le monde.
                                    </li>
                                    <br/>
                                    <li><p className="font-semibold">Prix Compétitifs</p>
                                        Grâce à nos partenariats avec les principaux constructeurs et notre réseau de
                                        fournisseurs, nous offrons des prix imbattables sur tous nos véhicules.
                                    </li>
                                    <br/>
                                    <li><p className="font-semibold">Qualité et Fiabilité</p>
                                        Chaque voiture passe par une inspection rigoureuse avant d`être mise en vente, vous garantissant ainsi des véhicules fiables et en parfait état.
                                    </li>
                                </ul>
                            </>}
                        />
                    </div>
                </div>
                {/*TODO: create more section here ( about, recommendation, ... )*/}
            </div>
        </>
    )
}

export default Main;
