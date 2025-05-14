import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Navbar from '../Navbar.jsx';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [log, setLog] = useState({
        email: "",
        password: ""
    });

    const onchg = (e) => {
        console.log(log);
        setLog({ ...log, [e.target.name]: e.target.value });
    }

    const nvar=useNavigate();
    const onclk = (e) => {
      e.preventDefault();
        console.log(log);
        axios.post("http://127.0.0.1:8080/loguser",log)

      .then((data)=>{
        console.log(data)
        localStorage.setItem('userId',data.data.data._id)
        alert(data.data.message)
        nvar("/userhome")

  
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    

  return (
    <div>
      <Navbar/>
        <Form>
        <div className='logincontainer'>
        <center>
            <h3 id='userloginheading'>USER LOGIN</h3></center><br/>
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

export default Login