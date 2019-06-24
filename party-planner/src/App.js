import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Parties from "./views/Parties";

function App() {
  return (
    <Router>
      <div className="App">
        <Parties />
      </div>
    </Router>
  );
}

export default App;
