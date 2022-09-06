import React from "react";

//onchange event
function OnChange() {
  const changeHandler = (event) => {
    console.log("Value:", event.target.value);
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="enter your name"
        onChange={changeHandler}
      />
      <input type="email" placeholder="email" />
      <textarea placeholder="enter request" cols="30" rows="10"></textarea>
    </form>
  );
}
export default OnChange;
