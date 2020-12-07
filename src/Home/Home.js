import React, { useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import axios from 'axios'

//import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
//import Brightness3Icon from '@material-ui/icons/Brightness3';


const Home = (props)=>{

    const inlineStyle={
        textDecoration:"none"
    }

    const [state, setState] = React.useState({
        checkedB: true
      });
    const [mode,setMode] = useState(true);
    const [positions,setPositions] = useState([]);
    const [description,setDescription] = useState("");
    //const [jobDetails,setJobDetails] = useState("");
    const [jobLocation,setJobLocation] = useState("");
    const [start,setStart] = useState(true);


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setMode(!mode);
        setStart(start)
    };

    useEffect(() => {
        if(mode === true)
            document.title = "Github Jobs | Light"
        else
            document.title = "Github Jobs | Dark"
      });

      const handleLocationFilter = (event)=>{
        setJobLocation(event.target.value);
      }
      const handleDescriptionFilter = (event)=>{
        setDescription(event.target.value);
      }

      const getJobsByDescription = ()=>{
        if(description ===""){
            getPositions()
        }
        else{
        axios.get(
            "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description="+description,
            )
            .then(result=>{
                setPositions(JSON.parse(JSON.stringify((result.data))));
            })
        }
      }

      const getJobsByLocation = ()=>{
        if(jobLocation ===""){
            getPositions()
        }
        else{
        axios.get(
            "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location="+jobLocation,
            )
            .then(result=>{
                setPositions(JSON.parse(JSON.stringify((result.data))));
            })
        }
      }

      const getJobsByFilter = ()=>{
        if(jobLocation ==="" && description === ""){
            getPositions()
        }
        if(jobLocation ==="" && description !== ""){
            getJobsByDescription()
        }
        if(description === "" && jobLocation !== ""){
            getJobsByLocation()
        }
        else{
            axios.get(
                "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location="+jobLocation,
                )
                .then(result=>{
                    setPositions(JSON.parse(JSON.stringify((result.data))));
                }) 
            }
        }

        React.useEffect(() => {
            axios.get(
                "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node",
                )
                .then(result=>{
                setPositions(JSON.parse(JSON.stringify((result.data))));
            })
      },[start]);


      const GetJobDescription =(id)=>{
        axios.get(
            "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/"+id+".json?markdown=true",
            )
            .then(result=>{
                props.onChange(JSON.parse(JSON.stringify(result.data)));
            })
      }


      const getPositions = ()=>{
            axios.get(
                    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node",
                    )
                    .then(result=>{
                    setPositions(JSON.parse(JSON.stringify((result.data))));
                })
            console.log(positions);
      }

    return(
        <div className={"panelPage"+(state.checkedB === true?"light":"dark")}>
            {/* <JobDescription allDetails={jobDetails}/> */}
            <div className="headerlight">
            <div className="filter">
                <span>
                    <SearchIcon/>
                    <input type="text" placeholder="Filter by Job Title, Name, Companies" onChange={handleDescriptionFilter} className="enterJob"></input>
                </span>
                <span>
                    <LocationOnIcon/>
                    <input type="text" placeholder="Filter by Location" onChange={handleLocationFilter} className="enterJob"></input>
                </span>
                <button class="findJobButton" onClick={getJobsByFilter}>Search</button>
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
            {positions.map((job) => (
                <Link style={inlineStyle} to="/jobDescription">
                    <div className="jobBlock" value={job.id} onClick={()=>GetJobDescription(job.id)}>
                    <img src={job.company_logo} className="logos" alt=""></img>
                    <label className="timePosted">{job.type}</label>
                    <label className={"jobTitle"+(state.checkedB === true?"light":"dark")}>{job.title}</label>
                    <label className="timePosted">{job.company}</label>
                    <label className="jobLocation">{job.location}</label>
                    </div>
               </Link>
                ))}
                <div>
                    <button className="load" onClick={getPositions}>Load Jobs</button>
                </div> 
            </div>
        </div>
        
    );
}

export default Home;