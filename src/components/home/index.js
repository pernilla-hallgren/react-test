// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET } from '../services/requests';
import { Container, Row, } from "react-bootstrap";
import Menu from '../menu';
import UserCard from '../user-card';
import { Link } from 'react-router-dom';

const Home = () => {

  const [userData, setUserData] = useState();

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }

  useEffect(() => {

    GET('users?page=2').then(response => {
      console.log(response);
      setUserData(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }, []);

  console.log(userData);

  return (
    <>
      <Menu />
        <div  className="m-3 text-center">
          <Link to="/create-user">
              <button type="submit" className="btn" style={btnStyle}>Create User</button>
          </Link>
        </div>

         <Container>
            <Row>
                {userData ? userData.data.map((data) => (UserCard(data))) : <div> LOADING USERS</div>}
            </Row>
          </Container>

          


    </>
  )
};

export default Home;