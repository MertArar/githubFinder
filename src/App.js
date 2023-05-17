import React from "react";
import { BrowserRouter } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";

import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
