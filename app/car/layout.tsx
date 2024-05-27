import React from "react";

import './style.scss'
import NavBar from "@/components/NavBar";

const Main = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Main;
