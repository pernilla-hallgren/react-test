import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { PATCH } from '../services/requests';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { GET } from '../services/requests';
import Input from '../../shared/components/input';
import Menu from '../menu';
import UserCard from '../user-card';

const Profile = () => {

  let { id } = useParams();

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

    GET(`users/${id}`).then(response => {
      console.log(response);
      setUserData(response.data.data);

      // const user = response.data.data
      // console.log(user);
      // localStorage.setItem('user', JSON.stringify(user));
      // localStorage.setItem('email', response.data.data.email);
      // localStorage.setItem('first_name', response.data.data.first_name);
      // localStorage.setItem('last_name', response.data.data.last_name);
      // localStorage.setItem('avatar', response.data.data.avatar);
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);

  console.log(userData)

  const showForm = () => {
    setShowUpdate(true);
  };


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

  const cardImgStyle = {
    border: '1px solid',
    borderRadius: '50%',
    padding: '7px',
  }
  
  return (
    <div>
      <Menu />
      <div className="text-center mt-5">
        <h2>PROFILE PAGE</h2>
      </div>

      {/* {userData && (
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

      )}  */}
      {/* {userData && (
      <div className="container">
        <UserCard 
          first_name={first_name} 
          last_name={last_name} 
          email={email} 
          avatar={avatar}
          id={id}
        />
      </div>
      )}   */}
      {userData && (
        <div className="container justify-content-center">
          <Row>
            <Col key={id} className="text-center">
              <Card style={cardStyle}>
                <Card.Img style={cardImgStyle} variant="top" src={userData.avatar} />
                <Card.Body style={{ background: '#5D6475' }}>
                  <Card.Text style={textStyle}>First name: {userData.first_name}</Card.Text>
                  <Card.Text style={textStyle}>Last name: {userData.last_name}</Card.Text>
                  <Card.Text style={textStyle}>Email: {userData.email}</Card.Text>            
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
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

