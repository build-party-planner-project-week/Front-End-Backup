import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utility/PrivateRoute'
import Parties from "./views/Parties";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/parties" component={Parties} />
        <Route patch="/" component={Login} />
        <Parties />
      </div>
    </Router>
  );
}

export default App;
