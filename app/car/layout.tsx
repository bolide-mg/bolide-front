import React from "react";

import './style.scss'

const Main = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <div className="header">
                Header
            </div>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Main;
