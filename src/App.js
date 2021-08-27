import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
