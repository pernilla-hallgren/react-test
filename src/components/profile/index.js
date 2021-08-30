import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PATCH } from '../services/requests';
import { Link } from 'react-router-dom';
import Input from '../../shared/components/input';
import Menu from '../menu';
import UserCard from '../user-card';

const Profile = ({ id }) => {
  
  const [name, setName] = useState(""),
        [job, setJob] = useState(""),
        [createdAt, setCreatedAt] = useState(""),
        [userId, setUserId] = useState(""),
        [showUpdate, setShowUpdate] = useState(false),   
        [userData, setUserData] = useState([]);
        // [firstname, setFirstname] = useState(""),
        // [lastname, setLastname] = useState(""),  
        // [email, setEmail] = useState(""),
        // [avatar, setAvatar] = useState("");
 

  useEffect(() => {
        setUserId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setJob(localStorage.getItem('job'));
        setCreatedAt(localStorage.getItem('createdAt'));

        setUserData(localStorage.getItem('user'));
        // setFirstname(localStorage.getItem('first_name'));
        // setLastname(localStorage.getItem('last_name'));
        // setEmail(localStorage.getItem('email'));
        // setAvatar(localStorage.getItem('avatar'));
  }, []);

  const showForm = () => {
    setShowUpdate(true);
  };

  console.log(userData)


  const getName = (e) => setName(e),
        getJob = (e) => setJob(e);
      
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      job: job,
      createdAt: createdAt,
      userId: id,
    };

    PATCH(`users/${id}`, data)
      .then((data) => {
        console.log(data.data) 
        setShowUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   
  const cardStyle = {
    background: '#5D6475',
    padding: '0.5rem', 
    margin: '15px', 
    borderRadius: '20px',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
    text: 'center'
  };

  const textStyle = {
    background: '#5D6475',
    fontSize: '17px',
    fontWeight: '300'
  };

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  };
  
  return (
    <div>
      <Menu />
      <div className="text-center mt-5">
        <h2>PROFILE PAGE</h2>
      </div>

      {userData && (
        <Container>
            <Row>
                {userData ? userData.map(data => ( 
                  <UserCard 
                    first_name={data.firstname} 
                    last_name={data.lastname} 
                    email={data.email} 
                    avatar={data.avatar}
                  />
                  )) : <div>LOADING USER PROFILE</div>}
            </Row>
      </Container>

      )}

      {/* {firstname && (
      <div className="container">
        <UserCard 
          first_name={firstname} 
          last_name={lastname} 
          email={email} 
          avatar={avatar}
        />
      </div>
      )} */}

      {userId && (
        <div className="container justify-content-center">
          <h3 className="text-center mt-4">Welcome {name}</h3>
          <Row>
            <Col key={id} className="text-center">
              <Card style={cardStyle}>
                <Card.Body style={{ background: '#5D6475' }}>
                  <Card.Text style={textStyle}>Name: {name}</Card.Text>
                  <Card.Text style={textStyle}>Job: {job}</Card.Text>
                  <Card.Text style={textStyle}>Created: {createdAt}</Card.Text>
                  <button onClick={() => showForm()} className="small-btn mx-auto">Update Profile</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        )}

        {showUpdate ? (
          <>
          <form onSubmit={handleSubmit} className="mb-5 mt-4">
            <div className="form-group text-center">
              <Input
                name="name"
                type="text"
                getState={getName}
                placeholder="Enter Name"
                id="name"
              />
              <Input
                name="job"
                type="text"
                getState={getJob}
                placeholder="Enter Job"
                id="job"
              />
            </div>
            <div className="form-group m-2 text-center">
              <button type="submit" className="btn" style={btnStyle}>Save</button>
            </div>
          </form>
        </>
        ) : (
        <>
        </>
        )}
    </div>
  )
}; 

export default Profile;

