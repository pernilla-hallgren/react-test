import React, { useState } from 'react';
import { POST } from '../services/requests';
import Menu from '../menu';
import Input from '../../shared/components/input';
import ErrorMessage from '../../shared/components/error-message';
// import ErrorMessage from '../../shared/components/error-message';

const Login = () => {

  const [email, setEmail] = useState(""),
        [pwd, setPwd] = useState(''),
        [error, setError] = useState(null);
  
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
        if (data.data.token) {
          localStorage.setItem("user", JSON.stringify(data.data));
        }
        return data.data;
        // localStorage.setItem('id', data.data.id);
        // localStorage.setItem('token', data.data.token);  
        // localStorage.setItem('email', data.data.email)       
      })
      .catch(error => {
        console.log(error);
        setError(error.response.data.message);
      })
  };



       
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

          {error && <ErrorMessage message={error} />}

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