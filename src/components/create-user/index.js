import React, { useState } from 'react';
import { POST } from '../services/requests';
import Menu from '../menu';
import Input from '../../shared/components/input';
import ErrorMessage from '../../shared/components/error-message';
import NewUser from '../new-user';

const CreateUser = () => {

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }
  
  const [name, setName] = useState(""),
        [job, setJob] = useState(""),
        [newUser, setNewUser] = useState({}),
        [userTrue, setUserTrue] = useState(false),
        [error, setError] = useState(null);
  
  const getName = (e) => setName(e),
        getJob = (e) => setJob(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserTrue(true);
    const data = {
      name: name,
      job: job,
    };

    POST('users', data)
      .then(data => {
        console.log(data)
        setNewUser(data.data)
        localStorage.setItem('name', (data.data.name));
        localStorage.setItem('job', (data.data.job));
        localStorage.setItem('id', (data.data.id));
        localStorage.setItem('createdAt', (data.data.createdAt));
      })
      .catch(error => {
        console.log(error.response.data);
        setError(error.response.data.error)
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

          {!name && error && <ErrorMessage message={error} />}

          <div className="form-group">
            <Input 
              name="name"
              type="text"
              getState={getName}
              placeholder="Enter Name"
              id="name"
            />
            
          </div>

          {!job && error && <ErrorMessage message={error} />}

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

            {userTrue && newUser ? (
              
              <NewUser 
                name={newUser.name}
                job={newUser.job}
                createdAt={newUser.createdAt}
                id={newUser.id}
              />
          ) : (
            <>
            </>
          )}
          
          </div>
        </form>
      </div>
    </>
  )
};

export default CreateUser;