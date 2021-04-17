import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img id="navimage" alt="" src="./images/footerlogo.png" className="d-inline-block align-middle" />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Services">
                  <LinkContainer to="/inventory">
                    <NavDropdown.Item>Inventory</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/transactions">
                    <NavDropdown.Item>Transactions</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;
