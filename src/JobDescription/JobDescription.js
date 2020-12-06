import React from 'react';
import '../Home/Home.css'
import './JobDescription.css'
import Switch from '@material-ui/core/Switch';
import {useState,useEffect} from 'react'


const JobDescription = ()=>{

    const inlineStyle={
        marginLeft:"0px"
    }

    const [state, setState] = React.useState({
        checkedB: true
        
      });
      const[mode,setMode] = useState(true);

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setMode(!mode);
      };

      useEffect(() => {
        if(mode === true)
            document.title = "Github Jobs | Light"
        else
            document.title = "Github Jobs | Dark"
      });
    return(
       
        <div className={"panelPage"+(state.checkedB === true?"light":"dark")}>
            <div className="headerlight">
                <div className={"jobName"+(state.checkedB === true?"light":"dark")}>
                        <img src={require('../images/thumbnail.jpg')} alt=""></img>
                        <label className={"jobTitle"+(state.checkedB === true?"light":"dark")} style={inlineStyle}>Software Engineer</label>
                        <label className="jobLocation" style={inlineStyle}>New York, US</label>
                        <button class="apply">Visit Company</button>
                </div>
                <span className="toggleSwitch">
                    {/* <Brightness3Icon className="darkIcon"></Brightness3Icon> */}
                    <Switch
                     className="toggle"
                     checked={state.checkedB}
                     onChange={handleChange}
                     name="checkedB"
                     color="primary">
                    </Switch>
                    {/* <WbIncandescentIcon/> */}
                    <label className="timePosted">{(mode ===  true ?"Light":"Dark")+" Mode"}</label>
                </span>
            </div>

            <div className={"description"+(state.checkedB === true?"light":"dark")}>
                <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Software Engineer</label>
                <label className="jobLocation">New York, US</label>
                <button className="apply">Apply</button>
                <div className="jobDetails">
                    <p className={"info"+(state.checkedB === true?"light":"dark")}>
                    Build applications in conjunction with our data scientists to support the use of machine learning, deep learning and similar technologies
                    Independently support processes related to the implementation of systems into production, including integration of purchased solutions.
                    Responsible for design, coding, testing, debugging, and documentation.

                    </p>
                    <p className={"info"+(state.checkedB === true?"light":"dark")}>
                    Required

                    Background Experience
                    3-5+ years of experience building enterprise scale production-ready applications
                    3-5+ years of experience with an object-oriented programming language such as Python, Java, C++, etc.
                    Strong foundation in algorithms, data structures and general computer science concepts

                    Preferred
                    Strong Python experience
                    Experience with Continuous Integration/Continuous Deployment
                    Hands on experience with data integrations
                    Experience with relational and no-sql databases
                    Experience with Machine Learning concepts
                    Agile Development
                    Python frameworks such as Flask, Django, etc.
                    DevOps methodology and tools
                    Event/Stream-based architectures such as Kafka
                    Microservices
                    Graph Databases
                    Elasticsearch / Splunk
                    Familiarity with Infrastructure operations
                    </p>
                    <p className={"info"+(state.checkedB === true?"light":"dark")}>
                    Additional Job Information

                    Ability to work effectively with business areas and IT management and staff.Good judgment.Knowledge of the business area's functions and systems, and system and applications program development technological alternatives.Good communication skills.
                    </p>
                </div>
                <div>
                    <button className="apply1">Apply to Job</button>
                </div>
            </div>
        </div>
     
    );

}
export default JobDescription;