import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useParams, useHistory } from 'react-router-dom';

const Menu = () => {

  let { id } = useParams();
  let history = useHistory();

  const [isAuthCreatedUser, setIsAuthCreatedUser] = useState(JSON.parse(localStorage.getItem('id'))),
        [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('token')));

  useEffect(() => {
    if (!isAuth && !isAuthCreatedUser ) {
      setIsAuth(null);
      setIsAuthCreatedUser(null);
    } 
  }, [isAuth, isAuthCreatedUser]);
  
  const authUser = isAuth || isAuthCreatedUser;

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('job');
    localStorage.removeItem('createdAt');
    history.push('/');
    window.location.reload();
  };

  const color = {
    padding: '5px 8px',
    fontSize: '17px',
    fontWeight: '300',
    background: '#283041',
    textDecoration: 'none',
    color: '#CECFD3',
  };

  return (
    <>
      <Navbar style={color} expand="lg" variant="dark">
        <NavLink style={color} to="/">React Test</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={color}  id="navbar-toggle">
          <Nav className="me-auto">

            {authUser &&  (
              <NavLink style={color} to={`/users/${id}/profile`}>Profile</NavLink>
            )}

            {authUser ? (
              <>
                <NavLink style={color} to="/" onClick={handleLogOut}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink style={color} to="/">Home</NavLink>
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