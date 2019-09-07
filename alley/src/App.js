import React, { Component } from "react";
import "./App.css";
import "../src/components/css/Cards.css";
import Mainapp from "../src/components/Main";
import NavProfile from "../src/components/NavProfile";
import Cards from "../src/components/Cards";
import Footer from "../src/components/Footer";

//ProfilePics
import VinneProfilePic from "../src/img/profilepic/vinne.jpeg";
import AmandaProfilePic from "../src/img/profilepic/amanda.jpg";
import VarguyProfilePic from "../src/img/profilepic/varguy.jpg";
import MaxProfilePic from "../src/img/profilepic/max.jpg";
import IsadoraProfilePic from "../src/img/profilepic/isadora.png";
import IllustrataProfilePic from "../src/img/profilepic/illustrata.jpeg";

//backgrounds
import VinneBg from "../src/img/background/vinnebg.png";
import AmandaBg from "../src/img/background/amandabg.png";
import VarguyBg from "../src/img/background/varguybg.jpg";
import MaxBg from "../src/img/background/maxbg.png";
import IsadoraBg from "../src/img/background/isadorabg.png";
import IllustrataBg from "../src/img/background/illustratabg.png";

class App extends Component { 
  state = {
    users: [
      {
        username: "Ilustrata",
        arroba: "@studioIlustrata",
        userpic: IllustrataProfilePic,
        cardbackground: IllustrataBg,
        id: 1
      },
      {
        username: "vinne",
        arroba: "@vinneart",
        userpic: VinneProfilePic,
        cardbackground: VinneBg,
        id: 2
      },
      {
        username: "isadora zeferino",
        arroba: "@imzeferino",
        userpic: IsadoraProfilePic,
        cardbackground: IsadoraBg,
        id: 3
      },
      {
        username: "Max Ulichney",
        arroba: "@MaxUlichney",
        userpic: MaxProfilePic,
        cardbackground: MaxBg,
        id: 4
      },
      {
        username: "Amanda Duarte",
        arroba: "@DinDuarte",
        userpic: AmandaProfilePic,
        cardbackground: AmandaBg,
        id: 5
      },
      {
        username: "Varguy",
        arroba: "@varguyart",
        userpic: VarguyProfilePic,
        cardbackground: VarguyBg,
        id: 6
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Mainapp />
        <NavProfile />
        < Cards key={this.state.id} users={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;
