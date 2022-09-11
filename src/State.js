import React from "react";
import { useState } from "react";

function Subscribe(){
const [message, setState] = useState("Welcome to my Channel")
const subscribeHandler = () => {
    setState("Thank You for Suscribing");
}
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={subscribeHandler}>Subscribe</button>
        </div>
    )
} 
export default Subscribe; 