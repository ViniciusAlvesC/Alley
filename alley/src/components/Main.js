import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./css/Main.css"
import Celular from '../img/celular.png'

const mainapp = () => {
  return (
    <div className="mainapp">
      <Container>
        <Row>
          <Col lg="12" xl="8">
            <div className="info">
              <h1 className="mb-4">Bem vindo!</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis dui et augue mattis rhoncus. Donec viverra magna quis
                pretium varius. Vestibulum maximus arcu quis elit elementum,
                eget malesuada ligula posuere. Aenean porttitor eleifend arcu a
                iaculis. Proin vel urna tristique, egestas lorem in, consequat
                nisi. Praesent varius dui ipsum, sit amet placerat sem venenatis
                a. Duis posuere libero vel nulla vestibulum.
              </p>
              <div className="botao">
                <a href="">Começar!</a>
              </div>
            </div>
          </Col>

          <Col xl="4" className="app">
            <img src={Celular} alt="celular-aplicativo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default mainapp;
