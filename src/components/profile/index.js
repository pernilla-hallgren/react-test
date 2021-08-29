import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PATCH } from '../services/requests';
import Input from '../../shared/components/input';
import Menu from '../menu';

const Profile = ({ id }) => {

  const [name, setName] = useState(""),
        [job, setJob] = useState(""),
        [createdAt, setCreatedAt] = useState(""),
        [showUpdate, setShotUpdate] = useState(false),
        [success, setSuccess] = useState(null);
        
  
  useEffect(() => {
    const name = localStorage.getItem('name');
    setName(name);
    const job = localStorage.getItem('job');
    setJob(job);
    const createdAt = localStorage.getItem('createdAt');
    setCreatedAt(createdAt);

  }, []);

  const showForm = () => {
    setShotUpdate(true);
  };

  const getName = (e) => setName(e),
        getJob = (e) => setJob(e);

      
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      job: job,
      id: id
    };

    PATCH(`users/${id}`, data)
      .then((data) => {
        console.log(data.data) // Börja här skapa ett stat som spara den nya uppdaterde infon  
        setSuccess('Profile successfully updated!');
        setShotUpdate(false);
      })
      .catch((error) => {
        // setErrorDisplayName(error.response.data.error.display_name);
        setSuccess(null);
      });
  }

  console.log(success)
   
  const cardStyle = {
    background: '#5D6475',
    width: '25rem',
    padding: '0.5rem', 
    margin: '15px', 
    borderRadius: '20px',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
    text: 'center'
  }

  const textStyle = {
    background: '#5D6475',
    fontSize: '17px',
    fontWeight: '300'
  }

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }
  
  return (
    <div>
      <Menu />
      <div className="text-center mt-5">
        <h2>{name}'s Profile</h2>
      </div>
      <Col key={id} className="justify-content-center text-center">
        <Card style={cardStyle}>
            <Card.Body style={{ background: '#5D6475' }}>
            <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}></Card.Title>
              <Card.Text style={textStyle}>Name: {name}</Card.Text>
              <Card.Text style={textStyle}>Job: {job}</Card.Text>
              <Card.Text style={textStyle}>Created: {createdAt}</Card.Text>
              <Link style={{ background: 'none'}} to={`/users/${id}/profile`}> 
                <button onClick={() => showForm()} className="small-btn mx-auto">Update Profile</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

         {showUpdate ? (
           <>
            <form onSubmit={handleSubmit} className="mb-5 mt-4">
              <div className="form-group">
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
              <div className="form-group m-5">
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

