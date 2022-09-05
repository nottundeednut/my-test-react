import React from "react";

function NameList() {
  const myList = ["frontend", "backend", "cloud"];
  const myArrayMap = myList.map((x) => <li key={x}>{x}</li>);
  return (
    <div>
      <ol>{myArrayMap}</ol>
    </div>
  );
}
export default NameList;
