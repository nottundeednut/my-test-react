import React from "react";

function Car(props) {
  return (
    // console.log(props);
    <div>
      {props.brand}{props.year}
    </div>
  );
}
export default Car;
