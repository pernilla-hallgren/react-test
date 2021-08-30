import React, { useState } from 'react';
import { POST } from '../services/requests';
import { Redirect } from 'react-router-dom';
import Menu from '../menu';
import Input from '../../shared/components/input';
import ErrorMessage from '../../shared/components/error-message';

const Login = () => {

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

    POST('login', data)
      .then(data => {
        console.log(data)
        setRedirect(true);
        localStorage.setItem('token', JSON.stringify(data.data.token));
        // localStorage.setItem('token', JSON.stringify(data.data.id));
        // getToken(localStorage.getItem('token'))
      })
      .catch(error => {
        console.log(error.response.data);
        setError(error.response.data.error)
      })
  };

  if(redirect) return <Redirect to="/"/>;
      
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
          <h2>LOGIN NOW</h2>
          <p>Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-5 mt-4">


          {!email && error && <ErrorMessage message={error} />}

          <div className="form-group">
            <Input 
              name="email"
              type="text"
              getState={getEmail}
              value={email}
              placeholder="Email"
              id="register-email"
            />
          </div>

          {!password && error && <ErrorMessage message={error} />}

          <div className="form-group">

            <Input 
              name="password"
              type="text"
              getState={getPassword}
              value={password}
              placeholder="Password"
              id="pwd"
            />
            <div className="form-group m-5">
                <button type="submit" className="btn" style={btnStyle}>Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default Login;