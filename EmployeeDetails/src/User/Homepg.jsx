import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

function Homepg() {  // Common homepage - landing

    // const nvar=useNavigate();
    // const regnav=()=>{
    //     nvar("/register/");
    // }
  return (
    <div>
        <div>Welcome to Employee Management Application...</div><br/>
        <center>
            <Button><link to={"/login"}>LOGIN</link></Button>&nbsp;&nbsp;
            <Button><link to={"/register"}>REGISTER</link></Button>
        </center>
    </div>
  )
}

export default Homepg