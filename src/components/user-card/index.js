import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Col } from "react-bootstrap";

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
  
  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }

  return (
    <>
      <Col key={id} sm="12" md="6" lg="4" >
        <Card style={cardStyle}>
            <Card.Body style={{ background: '#5D6475' }}>
                <Card.Img style={cardImgStyle} variant="top" src={avatar} />
            <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}></Card.Title>
                <Card.Text style={textStyle}>First name: {first_name}</Card.Text>
                <Card.Text style={textStyle}>Last name: {last_name}</Card.Text>
                <Card.Text style={textStyle}>Email: {email}</Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-lg-between">
              <Card.Link href={`/users/${id}`}> 
              <Button variant="#2A324B" style={btnStyle}>
            </Button>
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
    </>
  )
}
