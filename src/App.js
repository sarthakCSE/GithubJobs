import './App.css';
import Home from './Home/Home'
import React, {useState} from 'react';
import JobDescription from './JobDescription/JobDescription'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {

  const [jobGlobalDetails,setJobGlobalDetails] = useState("");

  function handleChange(jobDetailsName) {
    setJobGlobalDetails(jobDetailsName);
  }

  return (

    <div className="App">
      <Router>
        <Switch>
        {/* <Route path="/">
          <Home jobDetails={jobGlobalDetails} onChange={handleChange}/>
        </Route> */}
        <Route exact path="/home">
          <Home jobDetails={jobGlobalDetails} onChange={handleChange}/>
        </Route>
        <Route exact path="/jobDescription">
          <JobDescription allDetails = {jobGlobalDetails}/>
        </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
