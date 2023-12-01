//using this hook when we have to manage multiple state. In this case, the state management will be an object
//with multiple properties, and an action will be dispatched to update the state object
"use client";

import React, { useReducer } from "react";

interface State {
  count: number;
  showText: boolean;
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "addUp":
      return {
        showText: state.showText,
        count: state.count + 1,
      };
    case "toggleShowText":
      return {
        showText: !state.showText,
        count: state.count,
      };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "addUp" });
    dispatch({ type: "toggleShowText" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form>
        <h1 className="font-bold pb-2 mb-3">State Hook</h1>
        <h2 className="font-bold pb-10">{state.count}</h2>

        <button
          onClick={onClick}
          className="border border-gray-400 rounded px-2 py-5 w-40 mb-3"
        >
          Add Up
        </button>
        {state.showText && (
          <h3 className="font-bold text-red-600">Some text here</h3>
        )}
      </form>
    </div>
  );
};

export default ReducerHook;
