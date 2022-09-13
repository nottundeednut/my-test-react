import React from "react";

function ChildComponent(Props){
    return(
        <button onClick={()=>Props.greetHandler('child')}>Greet Parent</button>
    )
}
export default ChildComponent;