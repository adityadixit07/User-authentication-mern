import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [user, setLoginUser] = useState();
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login />}
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
