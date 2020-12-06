import './App.css';
import Home from './Home/Home'
//import React, {useState} from 'react';
import JobDescription from './JobDescription/JobDescription'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/jobid=32321">
          <JobDescription/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
