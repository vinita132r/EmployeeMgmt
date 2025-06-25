import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Registration.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const[reg,setReg]=useState({
      empname:"",
      age:"",
      empid:"",
      typeofemp:"",
      email:"",
      password:"",
      file:null
    })

    const onChg=(e)=>{
      console.log(e.target.value)
      // console.log(e.target.file)
      if(e.target.type==="file"){
        setReg({...reg,file:e.target.files[0]});
      }else{
        setReg({...reg,[e.target.name]:e.target.value});
      }
      // setReg({...reg,[e.target.name]:e.target.value});
    }

    // const onImg=(e)=>{
    //   console.log(e.target.file)
    //   setReg({...reg,file:e.target.files[0]});
    // }

    const nvar=useNavigate();

    const submitForm=(e)=>{
      e.preventDefault();
      const form=new FormData()

      form.append("empname",reg.empname)
      form.append("age",reg.age)
      form.append("empid",reg.empid)
      form.append("typeofemp",reg.typeofemp)
      form.append("email",reg.email)
      form.append("password",reg.password)
      form.append("file",reg.file)

      console.log(reg);
      axios.post("http://127.0.0.1:8080/reguser",form)
      .then((data)=>{
        console.log(data)
        alert("Registered successfully-")
        nvar("/login")
  
      })
      .catch((error)=>{
        console.log(error)
      })

      setReg({
        empname:"",
        age:"",
        empid:"",
        typeofemp:"",
        email:"",
        password:"",
        file:null
      })
    }
    
  return (
    <div>
      <Navbar />
      <div className="registrationformcontainer">
        <h2 className="registrationformheading">Employee Registration</h2>

        <Form onSubmit={submitForm}>

          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"  name='empname' onChange={onChg} required />
            </div>
            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Age</Form.Label>
              <Form.Control placeholder="Enter your age" name='age' onChange={onChg} required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Employment ID</Form.Label>
              <Form.Control type="number" placeholder="Enter your Employment ID"  name='empid' onChange={onChg} required />
            </div>

            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Type of Employment</Form.Label>
              <Form.Control type="text" placeholder="Enter type of Employment"  name='typeofemp' onChange={onChg} required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email"  name='email' onChange={onChg} required />
            </div>

            <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" name='password' onChange={onChg} required />
            </div>
          
          </div>
          <div className="registrationformrow">
          <div className="registrationformgroup">
              <Form.Label className='regformlabel'>Image</Form.Label>
              <Form.Control type="file" placeholder="Upload image" name='file' onChange={onChg} required />
            </div>
          </div>


          <div className="registrationformrow">
            <div className="registrationformgroup full-width">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" className='regformlabel' required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup full-width">
              <Button variant="primary" type="submit" className="registrationsubmitbutton">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
