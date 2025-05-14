import React, { useEffect, useState } from 'react';
import './Userprofilestyle.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Usernavbar from './Usernavbar';

import userviewonebgimg from '../asserts/emphome.webp'

function Userviewoneprof() {
  const [details, setDetails] = useState({})

  // const[update,setUpdate]=useState({
  //       empname:"",
  //       age:"",
  //       empid:"",
  //       typeofemp:"",
  //       email:"",
  //       password:""
  //     })
    
  const {id}=useParams()
  console.log(id);

    // const id=localStorage.getItem("userId")
    
    const viewuserfn=()=>{
        console.log(id)
        axios.post("http://127.0.0.1:8080/viewuser/"+id)
        .then((result)=>{
            console.log(result)
            setDetails(result.data.result)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }

    // const onChgdata=(e)=>{
    //   // axios.post("http://127.0.0.1:8080/updateuser/"+id)
    //         setDetails({...details,[e.target.name]:e.target.value})
      

    // }
    // const updateuserfn=(id)=>{
    //   axios.post("http://127.0.0.1:8080/updateuser"+id,details)
        
    // }

    useEffect(()=>{
        viewuserfn();
    },[])

  return (
    <div>
      <Usernavbar/>
      <img src={userviewonebgimg} id='userviewonebgimg'/>
        <div className="userprofile">
        <center>    
                <h2 id='userlistheading'>User Details</h2><br/>
                <div  className='profiledetails'>
                    {/* {
                      data.length>0 ?
                      data.map((item,index)=>()
                    } */}
                    
                    <img id='userprofileimg' src={`http://127.0.0.1:8080/${details?.image?.filename}`}/><br/>

                        <label className='userprofilelabel'>Name : {details?.empname}</label><br/><br/>
                        
                        <label className='userprofilelabel'>Type of Employement : {details?.typeofemp}</label><br/><br/>
                        
                        <label className='userprofilelabel'>Age : {details?.age}</label><br/><br/>
                        
                        <label className='userprofilelabel'>Employee ID : {details?.empid}</label><br/><br/>
                     
                        <label className='userprofilelabel'>Email : {details?.email}</label><br/><br/>
                        
                        <label className='userprofilelabel'>Password : {details?.password}</label><br/><br/>

                        {/* <button>Go Back</button> */}

                        {/* <h3>Update Data</h3><br/>

                        Name :<input type="text" placeholder={details.empname} onChange={onChgdata}/><br/><br/>
                        
                        Type of Employement :<input type="text" placeholder={details.typeofemp} onChange={onChgdata}/><br/><br/>
                        
                        Age :<input type="text" placeholder={details.age} onChange={onChgdata}/><br/><br/>
                        
                        Employee ID :<input type="text" placeholder={details.empid} onChange={onChgdata}/><br/><br/>
                     
                        Email :<input type="text" placeholder={details.email} onChange={onChgdata}/><br/><br/>
                        
                        Password :<input type="text" placeholder={details.password} onChange={onChgdata}/><br/><br/>

                        <button onClick={()=>{updateuserfn(details._id)}}>Update</button>&nbsp; */}

                
                </div>
            </center>
        </div>
    </div>
  )
}

export default Userviewoneprof