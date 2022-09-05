import React from "react";
import { useState } from "react";

function OnClickEvent() {
  //state
  const [counter, setCounter] = useState(0);
  //event handler method
  //   let num = 0;
  const increaseHandler = (event) => {
    // num++;
    // console.log(num);
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = (event) => {
    // num--;
    // console.log(num);
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseHandler}>increase</button>

      <button onClick={decreaseHandler}>decrease</button>
    </div>
  );
}
export default OnClickEvent;
