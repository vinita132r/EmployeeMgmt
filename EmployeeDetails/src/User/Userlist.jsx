import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Userprofilestyle.css';
import { SlLike } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
import Usernavbar from './Usernavbar';

import userlistbg from '../asserts/emphome.webp'


function Userlist() {
    const [data, setData] = useState([])
    
    const viewallfn=()=>{
        axios.post("http://127.0.0.1:8080/findalluser")
        .then((result)=>{
            console.log(result)
            setData(result.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }

    const nvar=useNavigate()

    const viewoneuser=(id)=>{
        // axios.post("http://127.0.0.1:8080/viewuser/:id",data)
        nvar("/userviewone/"+id);
        // .then((result)=>{
        //     console.log(result)
        //     setData(result.data.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
    }
    

    const userid=localStorage.getItem("userId")
    const likeuser=(guestid)=>{
        console.log(userid)
        axios.post("http://127.0.0.1:8080/likeuser",{userid:userid,guestid:guestid})
        //console.log(id)
        .then((result)=>{
            console.log(result)
            alert("Liked successfully")            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        viewallfn();
    },[])
  return (
    <div>
        <Usernavbar/>
        <img src={userlistbg} id='userlistbgimg' alt='userlistbgimg'/>
        <div className='container'>
        <div className="userlist">
        <center>    
                <h2 id='userlistheading'>User List</h2><br/>
                <div>                    
                      <table id='userlisttable'>
                          <thead>
                              <tr className='userlisttabletr'>
                                  <th className='userlistlabel'>Sl.No</th>
                                  <th className='userlistlabel'>Photo</th>
                                  <th className='userlistlabel'>Name </th>
                                  <th className='userlistlabel'>Type of Employement</th>
                                  <th className='userlistlabel'>Age</th>
                                  <th className='userlistlabel'>Employee ID</th>
                                  <th className='userlistlabel'>Email</th>
                                  <th className='userlistlabel'>Password</th>
                                  <th className='userlistlabel'>Options</th>
                              </tr>
                          </thead>

                        {
                            data.length > 0 ?
                            data.map((item, index)=>(
                                <tbody key={index}>
                                    <tr className='userlisttabletr'>
                                        <td className='userlistlabel'>{index + 1}</td>
                                        <td className='userlistlabel'><img id='userloguserlistimg' alt='userlistprofimg' src={`http://127.0.0.1:8080/${item.image.filename}`}/></td>
                                        <td className='userlistlabel'>{item.empname}</td>
                                        <td className='userlistlabel'>{item.typeofemp}</td>
                                        <td className='userlistlabel'>{item.age}</td>
                                        <td className='userlistlabel'>{item.empid}</td>
                                        <td className='userlistlabel'>{item.email}</td>
                                        <td className='userlistlabel'>{item.password}</td>
                                        <td className='userlistlabel'><button onClick={()=>{viewoneuser(item._id)}} id='userlistviewbtn'>View</button>&nbsp;
                                        {/* <button onClick={()=>{deleteuser(item._id)}}>Delete</button>&nbsp; */}
                                        <button onClick={()=>{likeuser(item._id)}} id='userlistlikebtn'><SlLike />&nbsp;
                                        Like</button></td>
                                    </tr>
                                </tbody>
                            )):<h3>No data found</h3>
                        }   
                      </table>

                </div>
            </center>
        </div>
        </div>
    </div>
  )
}

export default Userlist