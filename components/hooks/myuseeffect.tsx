//this is how to use useEffect hook
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const MyUseEffect = () => {
  const [comment, setComment] = useState(""); //this is the state that will hold the comments from the api call

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComment(response.data[0].email);
        console.log("api was called");
      });
  }, []);

  return (
    <div className="mt-20">
      <h1 className="font-bold">My Use Effect</h1>
      <h2 className="font-thin">{comment}</h2>
    </div>
  );
};

export default MyUseEffect;
