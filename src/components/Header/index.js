import React from 'react'
import './style.scss';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const Header = () => {

  return (
        <div className="header">

          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-twitter icon"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/"><i className="fab fa-github icon"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/"><i className="fab fa-linkedin-in icon"></i></a></li>
            <li>
              <a href="https://www.facebook.com/"><i className="fab fa-google-plus-g icon"></i></a></li>
          </ul>
           
          <h1 className="header__name"> Rosa Huisman </h1>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
       
  );
}



export default Header;