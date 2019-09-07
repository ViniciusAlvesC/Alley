import React from "react";
import "./css/NavProfile.css";
import {
  Nav,
  NavItem,
  Navbar,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const navprofile = () => {
  return (
    <div>
      <Navbar className="navbar-custom shadow mb-5" light expand="md">
        <Container>
          <div className="filter">
            <h5 className="trending">SEARCH:</h5>
            <div className="tags">
              <InputGroup size="lg">
                <Input placeholder="@" />
                <InputGroupAddon addonType="append">
                  <Button className="btncustom">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="profile">
                <div className="userinfo">
                  <div className="info-items">
                    <h6>Vinícius</h6>
                    <a href="/">
                      <i>
                        <FontAwesomeIcon icon={faBell} />
                      </i>
                    </a>
                    <a href="/">
                      <i>
                        <FontAwesomeIcon icon={faCommentDots} />
                      </i>
                    </a>
                  </div>
                </div>
                <a href="/" className="profile-pic"></a>
              </div>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navprofile;
