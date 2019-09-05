import React, { Component } from "react";
import "./App.css";
import Nav from "../src/components/Nav";
import Mainapp from "../src/components/Main";
import NavProfile from "../src/components/NavProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Mainapp />
        <NavProfile />
        <h1>tste</h1>
      </div>
    );
  }
}

export default App;
