import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles.css";

function UseEffectAPI() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      setUserData(await response.json());
    };
    getUsers();
  }, []);

  return (
    <>
    <div className="container">
      {userData.map((user) => {
        return <Card key={user.login} user={user}/>;
      })}
    </div>
    </>
    
  );
}

export default UseEffectAPI;
