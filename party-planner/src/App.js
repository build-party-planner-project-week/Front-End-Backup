import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utility/PrivateRoute'
import LoginPage from './LoginPage/LoginPage'
import Home from './views/Home'
import Parties from "./views/Parties";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/parties" component={Home} />
        <Route path="/" component={LoginPage} />
        <Home />
      </div>
    </Router>
  );
}

export default App;
