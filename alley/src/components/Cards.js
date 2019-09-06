import React from "react";
import {
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "./css/Pagination.css"

const Cards = props => {
  return (
    <Container>
      <Row>
        {props.users()}
        <Pagination size="lg" aria-label="Page navigation cards" className="mt-2 pagination">
          <PaginationItem>
            <PaginationLink first href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/" active>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">2</PaginationLink>
          </PaginationItem>
          <PaginationItem >
            <PaginationLink href="/">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="/" />
          </PaginationItem>
        </Pagination>
      </Row>
    </Container>
  );
};

export default Cards;
