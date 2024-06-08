import React from "react";

import "./style.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <ToastContainer
        position="top-right"
      autoClose={5000}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
      <NavBar />
      <div className="main">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
