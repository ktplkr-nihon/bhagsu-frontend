import React from 'react';
import './base.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, Contactus } from './pages';
import { Nav, Footer } from './components';
const App = () => {
  return (
     <div className="parent-container">     
     <Router>  
      <Nav /> 
       <div className="ctr-ex">
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/contactus" component={Contactus} />
       </Switch> 
       </div>   
       <Footer />
     </Router>
     </div>
  );
}

export default App;
