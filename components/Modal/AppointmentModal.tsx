"use client";

import Modal from "@/components/Modal/index";
import React, { useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";

const Main = () => {
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
        <AppointmentForm />
      </Modal>
    </>
  );
};

export default Main;
