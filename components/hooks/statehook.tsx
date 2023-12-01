"use client";

import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  const addUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // helps prevent the page from refreshing, and resetting the count
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="">
        <h1 className="font-bold pb-2 mb-3">State Hook</h1>
        <h2 className="font-bold pb-10">{count}</h2>

        <button
          onClick={(event) => addUp(event)}
          className="border border-gray-400 rounded px-2 py-5 w-40 mb-3"
        >
          Add Up
        </button>
      </form>
    </div>
  );
};

export default StateHook;
