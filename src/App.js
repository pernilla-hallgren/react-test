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
              exact
              component={Signup}
            />

            <Route 
              path="/login"
              exact
              component={Login}
            />

            <Route 
              path="/create-user"
              exact
              component={CreateUser}
            />

            <Route 
              path="/users/:id/profile"
              exact
              component={Profile}
            />

            <Route 
              path="/users/:id"
              exact
              component={Profile}
            />            
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
