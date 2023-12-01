"use client";

import React from "react";

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch = () => {
  const [name, setName] = React.useState<string>("");
  const [user, setUser] = React.useState<User | undefined>(undefined);

  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form>
        <div>
          <h1 className="font-bold pb-2 mb-3">User Search</h1>
          <input
            type="text"
            value={name}
            className="border border-gray-400 rounded px-2 py-5 w-full mb-3"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={onclick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Find User
          </button>
        </div>
      </form>
      <div className="flex flex-wrap mt-40 bg-gray-200 p-4">
        <h3>{user?.name}</h3>
        <h3>{user?.age}</h3>
      </div>
    </div>
  );
};

export default UserSearch;
