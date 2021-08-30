import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getCurrentUser, logout, getCurrentCreatedUser } from '../services/requests';

const Menu = () => {

  const [currentUser, setCurrentUser] = useState(undefined),
        [createdCurrentUser, setCurrentCreatedUser] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    const createdUser = getCurrentCreatedUser();

    if (user) {
      setCurrentUser(user);
    }
    if (createdUser) {
      setCurrentCreatedUser(createdUser);
    }
  }, []);
  console.log(createdCurrentUser);
  
  const name = currentUser || createdCurrentUser;

  const logOut = () => {
    logout();
  };

  const color = {
    padding: '5px 8px',
    fontSize: '17px',
    fontWeight: '300',
    background: '#283041',
    textDecoration: 'none',
    color: '#CECFD3',
  }

  return (
    <>
      <Navbar style={color} expand="lg" variant="dark">
        <NavLink style={color} to="/">React Test</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={color}  id="navbar-toggle">
          <Nav className="me-auto">

            {name && (
              <NavLink style={color} to="/users/:id/profile">Profile</NavLink>
            )}

            {name ? (
              <>
                <NavLink style={color} to="/" onClick={logOut}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink style={color} to="/sign-up">Sign Up</NavLink>
                <NavLink style={color} to="/login">Login</NavLink>
              </>
            )} 
            
          </Nav>
        </Navbar.Collapse>     
      </Navbar>
    </>
  )
}

export default Menu;