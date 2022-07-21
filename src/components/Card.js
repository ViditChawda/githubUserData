import React from "react";

function Card(props) {
  console.log(props.user);
  return (
    <div className="item">
      <img
        className="image"
        src={props.user.avatar_url}
        alt=""
        width={100}
        height="100"
      />
      <div className="title">
        <h3>{props.user.login}</h3>
        <div className="inner-div">
          <div>Article : 38</div>
          <div>Follower : 400 </div>
          <div>Rating : 87</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
