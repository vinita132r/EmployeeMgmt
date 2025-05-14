import React, { useEffect, useState } from 'react';
// import './Userprofilestyle.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';



function Adminviewuserprofile() {
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
  
      const viewuserfn=()=>{
          axios.post("http://127.0.0.1:8080/viewuser/"+id)
          .then((result)=>{
              console.log(result)
              setDetails(result.data.result)
          })
          .catch((error)=>{
              console.log(error)
          })
          
      }
  
      const onChgdata=(e)=>{
        // axios.post("http://127.0.0.1:8080/updateuser/"+id)
              setDetails({...details,[e.target.name]:e.target.value})
        
  
      }
      const updateuserfn=(id)=>{
        axios.post("http://127.0.0.1:8080/updateuser"+id,details)
          
      }
  
      useEffect(()=>{
          viewuserfn();
      },[])
  
    return (
      <div>
        <div className='adminhome'>
              <AdminNavbar/>
        
        </div>



          <div className="userprofile">
          <center>    
                  <h2>Your Profile</h2><br/>
                  <div  className='profiledetails'>
                      {/* {
                        data.length>0 ?
                        data.map((item,index)=>()
                      } */}
                      
                          <label>Name : {details.empname}</label><br/><br/>
                          
                          <label>Type of Employement : {details.typeofemp}</label><br/><br/>
                          
                          <label>Age : {details.age}</label><br/><br/>
                          
                          <label>Employee ID : {details.empid}</label><br/><br/>
                       
                          <label>Email : {details.email}</label><br/><br/>
                          
                          <label>Password : {details.password}</label><br/><br/>
  
                          <h3>Update Data</h3><br/>
  
                          Name :<input type="text" placeholder={details.empname} onChange={onChgdata}/><br/><br/>
                          
                          Type of Employement :<input type="text" placeholder={details.typeofemp} onChange={onChgdata}/><br/><br/>
                          
                          Age :<input type="text" placeholder={details.age} onChange={onChgdata}/><br/><br/>
                          
                          Employee ID :<input type="text" placeholder={details.empid} onChange={onChgdata}/><br/><br/>
                       
                          Email :<input type="text" placeholder={details.email} onChange={onChgdata}/><br/><br/>
                          
                          Password :<input type="text" placeholder={details.password} onChange={onChgdata}/><br/><br/>
  
                          <button onClick={()=>{updateuserfn(details._id)}}>Update</button>&nbsp;
  
                  
                  </div>
              </center>
          </div>
      </div>
    )
}

export default Adminviewuserprofile