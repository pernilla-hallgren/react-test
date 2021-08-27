import React, { useState } from 'react';
import { POST } from '../services/requests';
import Menu from '../menu';
import Input from '../../shared/components/input';
// import ErrorMessage from '../../shared/components/error-message';

const Login = () => {

  const [email, setEmail] = useState(""),
        [pwd, setPwd] = useState('');
        // [errorEmail, setErrorEmail] = useState(null),
        // [errorPwd, setErrorPwd] = useState(null);
  
  const getEmail = (e) => setEmail(e),
        getPwd = (e) => setPwd(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: pwd,
    };

    POST('login', data)
      .then(data => {
        console.log(data)
        localStorage.setItem('token', data.data.token);
      })
      .catch(error => {
        console.log(error);
        // setErrorEmail(error.response.data.error.email);
        // setErrorPwd(error.response.data.error.password)
      })
  }

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
          <p>Please fill in your details to login</p>
        </div>


        <form onSubmit={handleSubmit} className="mb-5 mt-4">
          <div className="form-group">

            <Input 
              name="email"
              type="text"
              getState={getEmail}
              placeholder="Email"
              id="register-email"
            />
          </div>
          <div className="form-group">

            <Input 
              name="password"
              type="text"
              getState={getPwd}
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