import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUser from './components/create-user';
import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';
import Signup from './components/signup';

const App= () => {

  return (
    <>
      <Router>
        <main>
          <Switch>
            <Route 
              path="/"
              exact
              component={Home}
            />

            <Route 
              path="/sign-up"
              component={Signup}
            />

            <Route 
              path="/login"
              component={Login}
            />

            <Route 
              path="/create-user"
              component={CreateUser}
            />

            <Route 
              path="/users/:id/profile"
              component={Profile}
            />           
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
