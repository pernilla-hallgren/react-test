import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';


const App= () => {
  return (
    <>
      <Router>
        <main>
          <Home />
        </main>
      </Router>
    </>
  );
}

export default App;
