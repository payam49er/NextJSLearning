// useRef hook example
// use this hook to manipulate the DOM elements
"use client";

import { useRef } from "react";

const MyUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    inputRef.current.value = "Hello world";
  };

  return (
    <div className="mt-20">
      <h1 className="font-bold">My Use Ref</h1>
      <input
        type="text"
        placeholder="Text here..."
        className="border border-gray-400 rounded px-2 py-5 w-full mb-3 text-red-600"
        ref={inputRef}
      />
      <button
        className="border border-gray-500 rounded py-2 w-full"
        onClick={onClick}
      >
        Change text
      </button>
    </div>
  );
};

export default MyUseRef;
