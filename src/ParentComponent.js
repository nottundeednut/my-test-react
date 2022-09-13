import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(){
    const[parentName, setState] = useState('Parent')
    function greetParent(childName){
        alert(`Hello ${parentName} from ${childName}`)
    }
    return(
        <ChildComponent greetHandler = {greetParent}/>
    )
}
export default ParentComponent;