import React from "react";
// import './src/App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavMenu() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/userHome">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="nv-auto">
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  );
}


export default NavMenu;