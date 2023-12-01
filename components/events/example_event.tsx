"use client";
import React from "react";

const ExampleEvent = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <form className="max-w-md">
        <input
          className="border border-gray-400 rounded px-2 py-5 w-full mb-3"
          key="input"
          type="text"
          onChange={onChangeHandler}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleClick}
        >
          Click Me
        </button>
      </form>
    </div>
  );
};

export default ExampleEvent;
