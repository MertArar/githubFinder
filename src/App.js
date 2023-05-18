import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Layout/Users/Users";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
