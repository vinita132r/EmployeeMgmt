import React, { useEffect, useState } from 'react';
import './Userprofilestyle.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Usernavbar from './Usernavbar';

function Userprofile() {
  const [details, setDetails] = useState({})

  // const[update,setUpdate]=useState({
  //       empname:"",
  //       age:"",
  //       empid:"",
  //       typeofemp:"",
  //       email:"",
  //       password:""
  //     })
    
  // const {id}=useParams()
  // console.log(id);

    const id=localStorage.getItem("userId")
    
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
      //console.log(e.target.value)
      //setDetails({...details,[e.target.name]:e.target.value})
      if(e.target.type==="file"){
        setDetails({...details,file:e.target.files[0]});
      }else{
        setDetails({...details,[e.target.name]:e.target.value});
      }

    }
    const updateuserfn=(id)=>{
      const form=new FormData()

      form.append("empname",details.empname)
      form.append("age",details.age)
      form.append("empid",details.empid)
      form.append("typeofemp",details.typeofemp)
      form.append("email",details.email)
      form.append("password",details.password)
      form.append("file",details.file)

      axios.post(`http://127.0.0.1:8080/updateuser/${id}`, form)
      .then((result) => {
        alert("Updated successfully");
        // setDetails(result)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    useEffect(()=>{
        viewuserfn();
    },[])

  return (
    <div>
      <Usernavbar/>
        <div className="userprofile">
        <center>    
                <h2>Your Profile</h2><br/>
                <div  className='profiledetails'>
                    {/* {
                      data.length>0 ?
                      data.map((item,index)=>()
                    } */}
                    
                    <img id='userprofileimg' src={`http://127.0.0.1:8080/${details?.image?.filename}`}/><br/><br/>
                    <table id='userprofiletable'>
                        <tr><th className='userprofilelabel'>Name:</th>
                        <td><input type="text" placeholder={details?.empname} name='empname' onChange={onChgdata}/></td>
                        </tr>
                        
                        <tr><th className='userprofilelabel'>Employement Type:</th>
                        <td><input type="text" placeholder={details.typeofemp} name='typeofemp' onChange={onChgdata}/></td>
                        </tr>
                        
                        <tr><th className='userprofilelabel'>Age:</th>
                        <td><input type="text" placeholder={details.age} name='age' onChange={onChgdata}/></td>
                        </tr>

                        
                        <tr><th className='userprofilelabel'>Employee ID:</th>
                        <td><input type="text" placeholder={details.empid} name='empid' onChange={onChgdata}/></td>
                        </tr>

                     
                        <tr><th className='userprofilelabel'>Email:</th>
                        <td><input type="text" placeholder={details.email} name='email' onChange={onChgdata}/></td>
                        </tr>

                        
                        <tr><th className='userprofilelabel'>Password:</th>
                        <td><input type="text" placeholder={details.password} name='password' onChange={onChgdata}/></td>
                        </tr>

                        <tr><th className='userprofilelabel'>Add new photo:</th>
                        <td><input type="file" onChange={onChgdata} name='file'/></td>
                        </tr>

                        </table>
                        <br/>
                        <button onClick={()=>{updateuserfn(details._id)}} id='userprofileupdatebtn'>Update</button>&nbsp;

                        <br/><br/><br/>
                
                </div>
            </center>
        </div>
    </div>
  )
}

export default Userprofile