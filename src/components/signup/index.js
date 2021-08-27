import React, { useState } from 'react';
import { POST } from '../services/requests';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Menu from '../menu';

const Signup = () => {

  const btnStyle = {
    borderRadius: '20px', 
    border: '0', 
  }

  const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [pwd, setPwd] = useState(''),
        [pwdConf, setPwdConf] = useState(''),
        [redirectVerify, setRedirectVerify] = useState(false),
        [errorEmail, setErrorEmail] = useState(null),
        [errorPwd, setErrorPwd] = useState(null);
        // [successful, setSuccessful] = useState(false),
        // [message, setMessage] = useState("");

 const  getName = (e) => setName(e),
        getEmail = (e) => setEmail(e),
        getPwd = (e) => setPwd(e),
        getPwdConf = (e) => setPwdConf(e);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: pwd,
      password_confirmation: pwdConf,
    };

    POST('sigup', data)
      // .then(data => {
        
      // }
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
            <input  
              name="name"
              type="text"
              className="input-field"
              getState={getName}
              placeholder="Name"
              id="register-name"
            />
          </div>
          <div className="form-group">
            <input  
              name="email"
              type="text"
              className="input-field"
              getState={getEmail}
              placeholder="Email"
              id="register-email"
            />
          </div>
          <div className="form-group">
            <input 
              name="password"
              type="text"
              className="input-field"
              getState={getPwd}
              placeholder="Password"
            />

          <div className="form-group">
            <input 
              name="pwdConf"
              type="text"
              className="input-field"
              getState={getPwdConf}
              placeholder="Password Confirmation"
            />
          </div>
            <div className="form-group m-5">
                <button className="btn" style={btnStyle}>Sign Up</button>
              </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup;