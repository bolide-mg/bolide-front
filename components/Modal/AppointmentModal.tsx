"use client";

import Modal from "@/components/Modal/index";
import React, { FC, useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import { Car } from "@/axios/model/Car";

const Main: FC<{ idCar: typeof Car.prototype.id }> = ({ idCar }) => {
  const [show, setShow] = useState(false);

  const onCloseModal = () => {
    setShow(false);
  };

  const onSubmit = () => console.log("Submit");

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="bg-secondary rounded-lg shadow-sm text-white"
      >
        Book
      </button>
      <Modal onClose={onCloseModal} show={show}>
        <AppointmentForm idCar={idCar} />
      </Modal>
    </>
  );
};

export default Main;
