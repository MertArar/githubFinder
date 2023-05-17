import React from "react";
import { BrowserRouter } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";

import Navbar from "./components/Layout/Navbar";
import Seaction from "./components/Layout/Seaction";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Seaction />
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
