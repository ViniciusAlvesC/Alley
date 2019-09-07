import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";
import "./css/Footer.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5">
        <Container>
          <Row className="justify-content-between">
            <div className="social">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faGitlab} />
                </i>
              </a>
            </div>

            <div>
              <p className="heart">
                Made with <i><FontAwesomeIcon icon={faHeart} /></i>by Vinícius Alves
              </p>
            </div>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
