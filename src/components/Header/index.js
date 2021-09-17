import React from 'react'
import './style.scss';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const Header = () => {

  return (
        <div className="header">
          <div className="header__firstsection"> 
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

            <h1 className="header__name"> Rosa Huisman </h1>

          </div>

          <div className="header__secondsection"> 
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-github"><i class="fa fa-github-alt"></i></a>
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-email"><i class="fa fa-envelope"></i></a>
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a>
          </div>

          
           
          

        </div>
       
  );
}



export default Header;