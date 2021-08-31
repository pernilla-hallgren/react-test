import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { PATCH, GET } from '../services/requests';
import { useParams } from "react-router-dom";
import Input from '../../shared/components/input';
import Menu from '../menu';

const Profile = () => {

  let { id } = useParams();

  const [name, setName] = useState(""),
        [job, setJob] = useState(""),
        [createdAt, setCreatedAt] = useState(""),
        [userId, setUserId] = useState(""),
        [showUpdate, setShowUpdate] = useState(false), 
        [showUser, setShowUser] = useState(false),
        [userData, setUserData] = useState([]);
 
  useEffect(() => {
    setUserId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setJob(localStorage.getItem('job'));
    setCreatedAt(localStorage.getItem('createdAt'));

    GET(`users/${id}`).then(response => {
      setUserData(response.data.data);
      setShowUser(true);
    })
    .catch((error) => {
      console.log(error.response.status)
    });
  }, [id]);

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
  };
  
  return (
    <div>
      <Menu />
      <div className="text-center mt-5">
        <h2>PROFILE PAGE</h2>
      </div>

      {showUser && (
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

      {userId === id && (
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

