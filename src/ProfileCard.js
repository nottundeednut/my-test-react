import React from "react";

//create profile card component
function ProfileCard(){
    return (
      <div className="wrap">
          <div className="avatar">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1662274269~exp=1662274869~hmac=c8915bec3894503f130812da380a0d8415f60a9bb59811d9f668e8fbb6bbdb38" alt="avatar" />
          </div>
          <div className="bio">
            <p className="bold-name">owolabi babatunde</p>
            <p>alt school africa</p>
            <p>front end engineering</p>
          </div>
        </div>
    );
  }
  export default ProfileCard;