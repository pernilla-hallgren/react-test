import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function UserCard(data) {

  const { id, first_name, last_name, email, avatar } = data

  const cardStyle = {
    background: '#5D6475',
    padding: '0.5rem', 
    margin: '15px', 
    borderRadius: '20px',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
  }

  const cardImgStyle = {
    border: '1px solid',
    borderRadius: '50%',
    padding: '7px',
  }

  const textStyle = {
    background: '#5D6475',
    fontSize: '17px',
    fontWeight: '300',
  }

  return (
    <>
      <Col key={id} sm="12" md="6" lg="4" className="justify-content-center text-center">
        <Card style={cardStyle}>
          <Card.Body style={{ background: '#5D6475' }}>
            <Card.Img style={cardImgStyle} variant="top" src={avatar} />
            <Card.Text style={textStyle}>First name: {first_name}</Card.Text>
            <Card.Text style={textStyle}>Last name: {last_name}</Card.Text>
            <Card.Text style={textStyle}>Email: {email}</Card.Text>
            {id && (
            <Link style={{ background: 'none'}} to={`/users/${id}/profile`}> 
              <button className="small-btn mx-auto">Show Profile</button>
            </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
