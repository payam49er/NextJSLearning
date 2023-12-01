"use client";
import React from "react";
import { useState, useRef } from "react";

type User = {
  name: string;
  sessionId: number;
};

const Login = () => {
  const [userName, setUserName] = useState("");
  const user = useRef<User | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //whenever the user types in the input field, the value of userName is updated
    setUserName(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    user.current = {
      name: userName,
      sessionId: Math.random(),
    };

    console.log(user.current?.name);
    console.log(user.current?.sessionId);
  };

  return (
    <div>
      {user.current?.name != null ? (
        `${user?.current?.name} is logged in with sessionId ${user?.current?.sessionId}`
      ) : (
        <form className="h-screen flex items-center justify-center">
          <div>
            <input
              className="border border-gray-400 rounded px-2 py-5 w-full mb-3"
              type="text"
              placeholder="User name"
              onChange={handleChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
