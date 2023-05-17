import React from "react";
import { BrowserRouter } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Layout/Users/Users";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Users />
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
