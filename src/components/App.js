import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

function App() {
    return (
      <div>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    );
  }

  export default App;