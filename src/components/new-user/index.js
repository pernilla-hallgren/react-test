import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NewUser = ({ id, name, job, createdAt }) => {

  const cardStyle = {
    background: '#5D6475',
    padding: '0.5rem', 
    margin: '15px', 
    borderRadius: '20px',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
  }

  const textStyle = {
    background: '#5D6475',
    fontSize: '17px',
    fontWeight: '300'
  }

  return (
    <>
      <Col key={id} className="justify-content-center text-center">
        <Card style={cardStyle}>
            <Card.Body style={{ background: '#5D6475' }}>
            <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}></Card.Title>
              <Card.Text style={textStyle}>Welcome {name}</Card.Text>
              <Card.Text style={textStyle}>Job: {job}</Card.Text>
              <Card.Text style={textStyle}>Created: {createdAt}</Card.Text>
              <Link style={{ background: 'none'}} to={`/users/${id}`}> 
                <button className="small-btn mx-auto">Update User</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    </>
  )
}

export default NewUser;



