import React from "react";
import {
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "./css/Pagination.css";
import { Col, Card, CardBody, CardText } from "reactstrap";

const Cards = props => {
  const renderCards = () => {
    const cards = props.users.map(user => {
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
          <Card key={user.id} className="shadow mb-5">
            <a href="/">
              <div style={thumbStyle}></div>
            </a>
            <CardBody>
              <div className="title">
                <a href="/">
                  <div style={ProfilePicStyle}></div>
                </a>
                <div className="userinfo">
                  <a href="/">
                    <h2 className="username">{user.username}</h2>
                  </a>
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

  return (
    <Container>
      <Row>{renderCards()}</Row>
      <Pagination
        size="lg"
        aria-label="Page navigation cards"
        className="mt-3 pagination"
      >
        <PaginationItem>
          <PaginationLink first href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="/" />
        </PaginationItem>
      </Pagination>
    </Container>
  );
};

export default Cards;
