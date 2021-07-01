import React from 'react';
import './base.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './pages';
import { Nav } from './components';
const App = () => {
  return (
     <div className="parent-container">
       <Nav />
     <Router>
       <Switch>
         <Route path="/" exact component={Home} />
       </Switch>
     </Router>
     </div>
  );
}

export default App;
