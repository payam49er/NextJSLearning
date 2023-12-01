import React, { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  Users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

//the angle brackets define the kind of a type that can be passed into this class based component

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const foundUser = this.props.Users.find((user) => {
      return user.name === this.state.name;
    });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <form>
          <div>
            <h1 className="font-bold pb-2 mb-3">User Search</h1>
            <input
              type="text"
              value={name}
              className="border border-gray-400 rounded px-2 py-5 w-full mb-3"
              onChange={(e) => this.state.user?.name}
            />
            <button
              onClick={this.onClick}
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
  }
}

export default UserSearch;
