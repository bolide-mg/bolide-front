import React from "react";

const appointment_modal_id = "appointment-modal";

const Main = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`h-screen w-screen z-50 absolute top-0 left-0 justify-center items-center ${show ? "flex" : "hidden"}`}
    >
      <div
        className="absolute h-screen w-screen backdrop-blur-sm bg-opacity-dark -z-50"
        onClick={onClose}
      ></div>
      <div className="h-4/5 w-3/5 bg-light flex flex-col rounded-xl overflow-hidden">
        <div className="w-full p-4 flex justify-end border-b border-light">
          <button
            type="button"
            className="bg-error text-light rounded-xl"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Main;
