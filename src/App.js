import React from "react";
import ProfileCard from "./ProfileCard";
import NameList from "./NameList";
import OnClickEvent from "./OnClickEvent";
import OnChange from "./OnChange";

//create root components App
function App() {
  return (
    <div>
      <ProfileCard />
      <NameList />
      <OnClickEvent />
      <OnChange />
    </div>
  );
}

export default App;
