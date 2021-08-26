import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { GET } from '../services/requests';
import Menu from '../menu';

const Home = () => {

  const [userData, setUserData] = useState();

  useEffect(() => {
    // GET('/users?page=2').then(response => {
    //   console.log(response);
    //   setUserData(response.data);
    // })

    axios.get('https://reqres.in/api/users')
      .then(response => {
        console.log(response);
        setUserData(response.data.data);
      })

  }, []);

  console.log(userData);

  return (
    <>
      <Menu />
      <div>
        <div>
          {/* {userData.map(user => )} */}
        </div>
        
      </div>


    </>
  )
}

export default Home;