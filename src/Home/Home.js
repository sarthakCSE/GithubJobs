import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import axios from 'axios'
//import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
//import Brightness3Icon from '@material-ui/icons/Brightness3';


const Home = ()=>{

    const inlineStyle={
        textDecoration:"none"
    }

    const [state, setState] = React.useState({
        checkedB: true
      });
    const[mode,setMode] = useState(true);
    let [positions,setPositions] = useState([]);

    const test=[
        {id:"1",name:"sam"},
        {id:"2",name:"sar"},
        {id:"3",name:"chay"},
        {id:"4",name:"pra"},
    ]
    
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

    //   useEffect(() => {
    //     axios.get(
    //         "https://jobs.github.com/positions.json?search=node",
    //         )
    //         .then(result=>{
    //           setPositions(JSON.parse(result.data));
    //         })
    //   console.log(positions);
    //   });

      const getGithubPositions = ()=>{
         
          axios.get(
              "https://jobs.github.com/positions.json?search=node",
              )
              .then(result=>{
                setPositions(JSON.parse(result.data));
              })
        console.log(positions);
    }

    return(
        <div className={"panelPage"+(state.checkedB === true?"light":"dark")}>
            <div className="headerlight">
            <div className="filter">
                <span>
                    <SearchIcon/>
                    <input type="text" placeholder="Filter by Job Title, Name, Companies" className="enterJob"></input>
                </span>
                <span>
                    <LocationOnIcon/>
                    <input type="text" placeholder="Filter by Location" className="enterJob"></input>
                </span>
                <button class="findJobButton">Search</button>
                <span>
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
            </div>
            <div className="details">
                {/* {positions.map((job) => (
                    <div className="jobBlock">{job.id}</div>
                 ))} */}
                <Link style={inlineStyle} to="/jobid=32321">
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                </Link>
           
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Sr. Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Front-End Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Solutions Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Infrastructure Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Sr.Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Product Manager</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Sr. Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div className="jobBlock">
                    <label className="timePosted">9h ago - Full time</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>Sr. Software Engineer</label>
                    <label className="jobLocation">New York, US</label>
                </div>
                <div>
                    <button className="load" onClick={getGithubPositions}>Load More</button>
                </div>
            </div>
        </div>
        
    );
}

export default Home;