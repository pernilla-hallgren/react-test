// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET } from '../services/requests';
import { Form, FormControl, Button, Container, Row, } from "react-bootstrap";
import Menu from '../menu';
import UserCard from '../user-card';

const Home = () => {

  const [userData, setUserData] = useState();

  useEffect(() => {
    GET('users').then(response => {
      console.log(response);
      setUserData(response.data);
    })

    // axios.get('https://reqres.in/api/users')
    //   .then(response => {
    //     console.log(response);
    //     setUserData(response.data.data);
    //   })

  }, []);

  console.log(userData);

  return (
    <>
      <Menu />
      <div>
        <div>
          {/* {userData.data[0].email} */}
          {/* <UserCard /> */}
          
          {/* {userData ? userData.map(user => (UserCard(user) : <div> LOADING USERS</div>))} */}
        </div>

         <Container>
            <Row>
                {userData ? userData.data.map((data) => (UserCard(data))) : <div> LOADING USERS</div>}
            </Row>
          </Container>
        
        
      </div>


    </>
  )
}

export default Home;