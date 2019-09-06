import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";
import "./css/Cards.css";

//ProfilePics
import VinneProfilePic from "../img/profilepic/vinne.jpeg";
import AmandaProfilePic from "../img/profilepic/amanda.jpg";
import VarguyProfilePic from "../img/profilepic/varguy.jpg";
import MaxProfilePic from "../img/profilepic/max.jpg";
import IsadoraProfilePic from "../img/profilepic/isadora.png";
import IllustrataProfilePic from "../img/profilepic/illustrata.jpeg";

//backgrounds
import VinneBg from "../img/background/vinnebg.png";
import AmandaBg from "../img/background/amandabg.png";
import VarguyBg from "../img/background/varguybg.jpg";
import MaxBg from "../img/background/maxbg.png";
import IsadoraBg from "../img/background/isadorabg.png";
import IllustrataBg from "../img/background/illustratabg.png";

export class Cards extends Component {
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
        <Col sm="12" md="6" lg="4" className="mt-5">
          <Card className="shadow">
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
      <Container>
        <Row>{this.renderCards()}</Row>
      </Container>
    );
  }
}

export default Cards;
