import React from "react";

import './style.scss'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Main = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="main">
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Main;
