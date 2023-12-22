"use client";

import React, { forwardRef, useState } from "react";

const CustomButton = (props: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="border border-red-600 bg-amber-200 rounded px-2 py-5 w-40 mb-3"
      >
        Button from the child
      </button>
      {toggle && <span>Toggle</span>}
    </div>
  );
};

export default CustomButton;
