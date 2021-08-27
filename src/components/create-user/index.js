import React, { useState } from 'react';
import { POST } from '../services/requests';
import Menu from '../menu';
import Input from '../../shared/components/input';
import ErrorMessage from '../../shared/components/error-message';

const CreateUser = () => {

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
  }



  const [name, setName] = useState(""),
        [job, setJob] = useState(''),
        [newUser, setNewUser] = useState({}),
        [errorName, setErrorName] = useState(null),
        [errorJob, setErrorJob] = useState(null);
  
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
        // setErrorEmail(error.response.data.error.email);
        // setErrorPwd(error.response.data.error.password)
      })
  }
  console.log(newUser);

  return (
    <>
      <Menu />
      <div className="container justify-content-center text-center">
        <div className="mt-5 mb-5">
          <h2>SIGN-UP NOW</h2>
          <p>Please fill in your details to create a user</p>
        </div>


        <form onSubmit={handleSubmit} className="mb-5 mt-4">
          <div className="form-group">
 
            <Input 
              name="name"
              type="text"
              getState={getName}
              placeholder="Enter Name"
              id="register-email"
            />
          </div>
          <div className="form-group">
         
            <Input 
              name="job"
              type="text"
              getState={getJob}
              placeholder="Enter Job"
              id="pwd"
            />

          {/* <div className="form-group">
            <Input 
              name="pwdConf"
              type="text"
              getState={getPwdConf}
              placeholder="Password Confirmation"
              id="pwd-conf"
            />
          </div> */}
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