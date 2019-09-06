import React, { Component } from "react";
import "./App.css";
import Nav from "../src/components/Nav";
import Mainapp from "../src/components/Main";
import NavProfile from "../src/components/NavProfile";
import Cards from "../src/components/Cards"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Mainapp />
        <NavProfile />
        <Cards />
      </div>
    );
  }
}

export default App;
