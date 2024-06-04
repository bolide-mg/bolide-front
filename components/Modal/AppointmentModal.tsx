"use client"

import Modal from "@/components/Modal/index";
import React, {useState} from "react";

const Main = () => {
    const [show, setShow]= useState(false)

    const onCloseModal = ()=>{setShow(false)}

    const onSubmit = () => console.log("Submit")

    return (
        <>
            <button
                type="button"
                onClick={()=>setShow(!show)}
                className="bg-secondary rounded-lg shadow-sm text-white">
                Book
            </button>
            <Modal onClose={onCloseModal} show={show}>
                <form onSubmit={onSubmit}
                      className="flex flex-col justify-between h-full pb-20 pl-4 md:pl-14 overflow-y-auto gap-5">
                    <h3 className="text-xl font-bold">Create appointment</h3>
                    <div>
                        <div className="mb-2 block">
                            <p>Name</p>
                        </div>
                        <input type="text" placeholder="John" className="h-10 rounded p-4 ring-grey ring-1"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <p>First Name</p>
                        </div>
                        <input type="text" placeholder="Doe" className="h-10 rounded p-4 ring-grey ring-1"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <p>Email</p>
                        </div>
                        <input type="email" placeholder="test@gmail.com" className="h-10 rounded p-4 ring-grey ring-1"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <p>Date</p>
                        </div>
                        <input type="date" className="h-10 rounded p-4 ring-grey ring-1"/>
                    </div>
                    <div className="flex p-6 gap-6">
                        <button type="submit" className="bg-primary w-24 h-8 rounded text-light">Confirm</button>
                        <button type="button" className="bg-error w-24 h-8 rounded text-light" onClick={onCloseModal}>Close</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default Main;