import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
import Navbar from '../Navbar.jsx';
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
    const [log, setLog] = useState({
        email: "",
        password: ""
    });

    const onchg = (e) => {
        // console.log(log);
        setLog({ ...log, [e.target.name]: e.target.value });
    }
    

    const nvar=useNavigate();
    const onclk = (e) => {

      e.preventDefault();
        console.log(log)
        if(log.email==="admin123@gmail.com" && log.password==="admin123"){
            // console.log(log.email)
            // console.log(log.password)
            alert("Login successfull...");
            nvar("/adminhome");
        
        }
    }
  return (
    <div>
        <Navbar/>
        <Form>
        <div className='logincontainer'>
        <center>
            <h3 id='adminloginheading'>ADMIN LOGIN</h3></center><br/>
        <div className='loginformgroup'>
        <Form.Label className='loginformlabel'>UserName</Form.Label>&nbsp;
        <Form.Control type='text' placeholder='Enter your Username' name='email' onChange={onchg}/>
        </div>
        <br/><br/>
        <div className='loginformgroup'>
        <Form.Label className='loginformlabel'>Password</Form.Label>&nbsp;
        <Form.Control type='password' placeholder='Enter your password' name='password' onChange={onchg}/>
        </div>
        <br/><br/><center>
        <button className='loginbutton' onClick={onclk}>Submit</button>
        </center>
    </div>
    </Form>
    </div>
  )
}

export default Adminlogin