import React from "react";

function Car(props) {
  const {brand, year} = props
  return (
    // console.log(props);
    <div>
      {brand}{year}
    </div>
  );
}
export default Car;
