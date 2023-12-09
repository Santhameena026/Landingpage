import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <section>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{color:'brown',fontWeight:'700',fontSize:'35px'}}>HomeTown</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link" style={{color:'black',fontWeight:'500',fontSize:'20px'}} href="/">Homepage</Nav.Link>
            <Nav.Link className="link" style={{color:'black',fontWeight:'500',fontSize:'20px'}} href="/about">About Us</Nav.Link>
            <Nav.Link className="link" style={{color:'black',fontWeight:'500',fontSize:'20px'}} href="/collection">Collections</Nav.Link>
            <Nav.Link className="link" style={{color:'black',fontWeight:'500',fontSize:'20px'}} href="/review">Reviews</Nav.Link>
            <Nav.Link className="link" style={{color:'black',fontWeight:'500',fontSize:'20px'}} href="/contact">Contact us</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default Header