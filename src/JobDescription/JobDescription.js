import React from 'react';
import '../Home/Home.css'
import './JobDescription.css'
import Switch from '@material-ui/core/Switch';
import {useState,useEffect} from 'react'


const JobDescription = (props)=>{

    const inlineStyle={
        marginLeft:"0px"
    }
    const marginStyle={
        marginLeft:"auto"
    }

    const [state, setState] = React.useState({
        checkedB: true
        
      });
      const[mode,setMode] = useState(true);

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setMode(!mode);
      };

      const howtoapply = (data) =>{
          window.alert(data.allDetails.how_to_apply)
      }

      useEffect(() => {
        if(mode === true)
            document.title = "Github Jobs | Light"
        else
            document.title = "Github Jobs | Dark"
      });
    return(
       
        <div className={"panelPage"+(state.checkedB === true?"light":"dark")}>
            {console.log(props)}
            <div className="headerlight">
                <div className={"jobName"+(state.checkedB === true?"light":"dark")}>
                        <img className="logos" src={props.allDetails.company_logo} alt=""></img>
                        <label className={"jobTitle"+(state.checkedB === true?"light":"dark")} style={inlineStyle}>{props.allDetails.company}</label>
                        <label className="jobLocation" style={inlineStyle}>{props.allDetails.location}</label>
                        <a href={props.allDetails.company_url} style={marginStyle} target="blank">
                            <button class="apply">Company Site</button>
                        </a>
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
                <label className={"jobTitle"+(state.checkedB === true?"light":"dark")} style={inlineStyle}>{props.allDetails.title}</label>
                <label className="timePosted" style={inlineStyle}>{props.allDetails.type}</label>
                <label className="timePosted" style={inlineStyle}>{props.allDetails.company}</label>
                <label className="jobLocation" style={inlineStyle}>{props.allDetails.location}</label>

                    <button className="apply" onClick={()=>howtoapply(props)}>Apply</button>

                <div className="jobDetails">
                    <p className={"info"+(state.checkedB === true?"light":"dark")}>
                    {props.allDetails.description}
                    </p>
                </div>
                <div>
                    <button className="apply1" onClick={()=>howtoapply(props)}>Apply to Job</button>
                </div>
            </div>
        </div>
     
    );

}
export default JobDescription;