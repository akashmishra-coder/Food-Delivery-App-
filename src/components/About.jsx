import { Component } from "react";
import { useState, useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";
import Shimmer from "./Shimmer";

function About() {
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    fetchData();
   
  }, []);

  async function fetchData() {
    try {
      const data = await fetch("https://api.github.com/users");
      const json = await data.json();
      console.log(json[0]);
      setuserInfo(json);
    } catch (error) {
      console.log(error);
    }
  }
  
if(userInfo.length === 0) return <Shimmer />

  return (
    <div >
          <h1 className="w-full my-10 text-4xl font-bold text-center ">About us </h1>
        <div className=" flex flex-wrap justify-center gap-5">
        {userInfo.map((data) => (
          <UserClass key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default About;
