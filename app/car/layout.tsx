import React from "react";

import './style.scss'
import DropDown from "@/components/DropDown";

const Main = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <div className="header">
                <DropDown />
            </div>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Main;
