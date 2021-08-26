import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  
  const color = {
    padding: '5px 8px',
    fontSize: '17px',
    fontWeight: '300',
    background: '#283041',
    textDecoration: 'none'
  }

  return (
    <>
      <Navbar style={color} expand="lg" variant="dark">
        <Navbar.Brand style={color} href="#home">React Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={color}  id="navbar-toggle">
          <Nav className="me-auto">
            <Nav.Link style={color} to="/">Home</Nav.Link>
            <Nav.Link style={color} to="/sign-up">Sign Up</Nav.Link>
            <Nav.Link style={color} to="/login">Login</Nav.Link>
            <Nav.Link style={color} to="/profile">Profile</Nav.Link>
            <Nav.Link style={color} to="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>     
      </Navbar>
    </>
  )
}

export default Menu;