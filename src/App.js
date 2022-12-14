import React from "react";
import ProfileCard from "./ProfileCard";
import NameList from "./NameList";
import OnClickEvent from "./OnClickEvent";
import OnChange from "./OnChange";
import Car from "./Props";
import Subscribe from "./State";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";

//create root components App
function App() {
  return (
    <div>
      {/* <ProfileCard />

      <NameList />

      <OnClickEvent />

      <OnChange />

      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          const { name, email } = event.target.elements;
          alert(`Hello ${name.value}, your email is ${email.value}`);
        }}
      >
        <input type="text" placeholder="Enter full name" name="name" />
        <input type="email" placeholder="Enter your email" name="email" />
        <button type="submit">Submit</button>
      </form>

      <Car brand="Toyota" year="1989" />

      <Subscribe />

      <ParentComponent /> */}

      <UserGreeting />
    </div>
  );
}

export default App;
