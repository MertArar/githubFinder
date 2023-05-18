import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";

//COMPONENTS

import Navbar from "./components/Layout/Navbar";
import Users from "./components/Layout/Users/Users";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
