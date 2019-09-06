import React from "react";
import "./css/NavProfile.css";
import { Nav, NavItem, Navbar, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const navprofile = () => {
  return (
    <div>
      <Navbar className="navbar-custom shadow mb-4" light expand="md">
        <Container>
          <div className="filter">
            <h5 className="trending">TRENDING:</h5>
            <div className="tags">
              <a className="tag" href="/">
                Art
              </a>
              <a className="tag" href="/">
                Digital
              </a>
              <a className="tag" href="/">
                Illustration
              </a>
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
