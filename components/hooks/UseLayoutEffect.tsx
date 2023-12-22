//with useLayoutHook we can access the DOM after the render is completed
//it renders the component and then it runs the function inside the useLayoutEffect
"use client";

import { useLayoutEffect, useState } from "react";

const MyUseLayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const useLayoutEffectHook = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", useLayoutEffectHook);
    return () => {
      window.removeEventListener("resize", useLayoutEffectHook);
    };
  }, []);

  return (
    <div className="mt-20">
      <h1 className="font-bold">My Use Layout Effect</h1>
      <h2 className="font-bold">Width: {width}</h2>
      <h2 className="font-bold">Height: {height}</h2>
    </div>
  );
};

export default MyUseLayoutEffect;
