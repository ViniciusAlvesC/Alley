import React from "react";
import "./css/Nav.css";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import Logo from '../img/logo.png'

const navmenu = () => {
  return (
    <div>
      <Navbar className="navbar-custom shadow" light expand="md">
        <Container>
          <NavbarBrand href="/"><img src={Logo} alt="logo" className="logo"></img></NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default navmenu;
