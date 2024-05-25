import React from "react";

import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

const Main = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <div className="header">
                <button type="button">
                    <FontAwesomeIcon icon={faEllipsis} width={30} />
                </button>
            </div>
            <div className="menu">
                menu
            </div>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Main;
