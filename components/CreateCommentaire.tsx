"use client"

import {useState} from "react";
import {sendEmail} from "@/axios/email";

const Main = () => {
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={()=>{
      sendEmail(content)
    }}>
      <input
        type="email"
        placeholder="Ton email"
        onChange={e=>setEmail(e.target.value)}
      />
      <textarea
        name="content"
        id="content-commentaire"
        placeholder="Ton commentaire"
        onChange={e=>setContent(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  )
};

export default Main;