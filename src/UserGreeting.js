import React from "react";
import { useState } from "react";

function UserGreeting(){
    const [isLoggedIn, setState] = useState(true);
    // let message;
    // // if (isLoggedIn){
    // //     return <div>Welcome Tunde</div>
    // // }
    // // else{
    // //     return <div>Wecome Guest</div>
    // // }
   

    return(
        isLoggedIn && <div>Welcome Tunde</div>
    );
}
export default UserGreeting;