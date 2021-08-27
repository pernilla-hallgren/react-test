import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';


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
            
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
