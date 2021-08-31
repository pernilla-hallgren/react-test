import React, { useState } from 'react';
import { POST } from '../services/requests';
import { Redirect } from 'react-router-dom';
import Menu from '../menu';
import Input from '../../shared/components/input';
import ErrorMessage from '../../shared/components/error-message';

const Signup = ({ id }) => {

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState(''),
        [error, setError] = useState(null),
        [redirect, setRedirect] = useState(false);
  
  const getEmail = (e) => setEmail(e),
        getPassword = (e) => setPassword(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    POST('register', data)
      .then(data => {
        console.log(data)
        setRedirect(true);
        localStorage.setItem('id', JSON.stringify(data.data.id));
        localStorage.setItem('token', JSON.stringify(data.data.token));
      })
      .catch(error => {
        console.log(error.response.data);
        setError(error.response.data.error);
      })
  };

  if(redirect) return <Redirect to="users/4/profile"/>;

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
    color: 'white'
  }

  return (
    <>
      <Menu />
      <div className="container justify-content-center text-center">
        <div className="mt-5 mb-5">
          <h2>SIGN-UP NOW</h2>
          <p>Please fill in your details and create an account</p>
        </div>


        <form onSubmit={handleSubmit} className="mb-5 mt-4">
          <div className="form-group">

            {!email && error && <ErrorMessage message={error} />}

            <Input 
              name="email"
              type="text"
              getState={getEmail}
              placeholder="Email"
              id="register-email"
            />
          </div>
          <div className="form-group">
            
            {!password && error && <ErrorMessage message={error} />}

            <Input 
              name="password"
              type="text"
              getState={getPassword}
              placeholder="Password"
              id="password"
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
                <button type="submit" className="btn" style={btnStyle}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default Signup;