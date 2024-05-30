import React from "react";
import BackgroundImage from "@/components/BackgroundImage";

const Main = () => {
    return (
        <>
            <BackgroundImage />
            <div className="h-screen w-screen flex justify-center items-center flex-col">
                <p className="text-9xl font-bold">Welcome</p>
                <p className="text-9xl font-bold text-primary">Bolide</p>
            </div>
        </>
    )
}

export default Main;
