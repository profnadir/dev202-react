import React, { useState } from 'react'

export default function MessageFun() {
    const [msg,setMsg] = useState("Bienvenue visiteur2")
    const [msgBTN,setMsgBTN] = useState("inscription2")

    function inscription() {
        console.log("hi");
        setMsg("votre inscription est effectuée2")
        setMsgBTN("merci2")
    }

  return (
    <div>
        <h1>{msg}</h1>
        <button onClick={inscription}>{msgBTN}</button>
      </div>
  )
}
