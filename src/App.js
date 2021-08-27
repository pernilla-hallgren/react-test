import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUser from './components/create-user';

import Home from './components/home';
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
              path="/create-user"
              exact
              component={CreateUser}
            />
            
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
