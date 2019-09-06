import React, { Component } from "react";
import { Col, Card, CardBody, CardText } from "reactstrap";
import "./App.css";
import "../src/components/css/Cards.css";
import Mainapp from "../src/components/Main";
import NavProfile from "../src/components/NavProfile";
import Cards from "../src/components/Cards";

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
        cardbackground: IllustrataBg
      },
      {
        username: "vinne",
        arroba: "@vinneart",
        userpic: VinneProfilePic,
        cardbackground: VinneBg
      },
      {
        username: "isadora zeferino",
        arroba: "@imzeferino",
        userpic: IsadoraProfilePic,
        cardbackground: IsadoraBg
      },
      {
        username: "Max Ulichney",
        arroba: "@MaxUlichney",
        userpic: MaxProfilePic,
        cardbackground: MaxBg
      },
      {
        username: "Amanda Duarte",
        arroba: "@DinDuarte",
        userpic: AmandaProfilePic,
        cardbackground: AmandaBg
      },
      {
        username: "Varguy",
        arroba: "@varguyart",
        userpic: VarguyProfilePic,
        cardbackground: VarguyBg
      }
    ]
  };

  renderCards = () => {
    const cards = this.state.users.map(user => {
      const thumbStyle = {
        background: `url(${user.cardbackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "430px",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px"
      };

      const ProfilePicStyle = {
        background: `url(${user.userpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        height: "70px",
        width: "70px",
        marginRight: "10px"
      };

      return (
        <Col md="12" lg="6" xl="4">
          <Card className="shadow mb-5">
            <div style={thumbStyle}></div>
            <CardBody>
              <div className="title">
                <div style={ProfilePicStyle}></div>
                <div className="userinfo">
                  <h2 className="username">{user.username}</h2>
                  <p className="arroba">{user.arroba}</p>
                  <div className="categories">
                    <p>Illustration</p>
                    <p>Digital</p>
                  </div>
                </div>
              </div>
              <CardText className="about mb-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed facilisis
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return cards;
  };

  render() {
    return (
      <div className="App">
        <Mainapp />
        <NavProfile />
        <Cards users={this.renderCards} />
      </div>
    );
  }
}

export default App;
