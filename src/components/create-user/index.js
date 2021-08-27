import React, { useState } from 'react';
import { POST } from '../services/requests';
import Menu from '../menu';
import Input from '../../shared/components/input';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const CreateUser = () => {

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }
  
  const [name, setName] = useState(""),
        [job, setJob] = useState(''),
        [newUser, setNewUser] = useState({});
  
  const getName = (e) => setName(e),
        getJob = (e) => setJob(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      job: job,
    };

    POST('users', data)
      .then(data => {
        console.log(data)
        setNewUser(data)
        // localStorage.setItem('id', data.data.id);
        // localStorage.setItem('token', data.data.token);
      })
      .catch(error => {
        console.log(error)
      })
  }
  console.log(newUser);


  return (
    <>
      <Menu />
      <div className="container justify-content-center text-center">
        <div className="mt-5 mb-5">
          <h2>CREATE USER</h2>
          <p>Please fill in your details to create a user</p>
        </div>


        <form onSubmit={handleSubmit} className="mb-5 mt-4">
          <div className="form-group">
            <Input 
              name="name"
              type="text"
              getState={getName}
              placeholder="Enter Name"
              id="name"
            />
            
          </div>
          <div className="form-group">
            <Input 
              name="job"
              type="text"
              getState={getJob}
              placeholder="Enter Job"
              id="job"
            />
          
            <div className="form-group m-5">
                <button type="submit" className="btn" style={btnStyle}>Create User</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default CreateUser;