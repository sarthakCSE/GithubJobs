import React, { useState } from 'react'
import './Header.css'
import Switch from '@material-ui/core/Switch';

const Header =()=>{

    const [state, setState] = React.useState({
        checkedB: true
      });
    const[mode,setMode] = useState(true);

    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setMode(!mode);
      };

    return(
        <div className = "headerlight">
            <span className="toggle">
            {/* <Brightness3Icon className="darkIcon"></Brightness3Icon> */}
            <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary">
            </Switch>
            {/* <WbIncandescentIcon/> */}
            <label className="timePosted">{(mode ===  true ?"Light":"Dark")+" Mode"}</label>  
            </span>
        </div>
    );
}

export default Header;