"use client";

import CustomButton from "@/components/CustomButton";
import { useRef } from "react";

const ImperativeHandle = () => {
  const ref = useRef(null);

  return (
    <div className="mt-20">
      <h1 className="font-bold text-black-600">ImperativeHandle</h1>
      <button className="border border-gray-400 rounded px-2 py-5 w-full mb-3 mt-5">
        Button from Parent
      </button>
      <CustomButton />
    </div>
  );
};

export default ImperativeHandle;
