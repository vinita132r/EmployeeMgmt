import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { SlLike } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import './Adminuserliststyle.css'

import adminuserlistbgimg from '../asserts/emphome.webp'


function Adminuserlist() {
    const [data, setData] = useState([])
    const [act,setAct]=useState(true)

    const actdeactUser=(id)=>{
        axios.post("http://127.0.0.1:8080/actuser/"+id)
        .then((result)=>{
            console.log(result)
            const updatedUser = result.data
            setData(prev=>
                prev.map(user=>
                    user._id === id ? {...user, isActive :updatedUser.isActive} : user
                )
            )
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
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
        nvar("/userprofile/"+id);
        // .then((result)=>{
        //     console.log(result)
        //     setData(result.data.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
    }
    // const updateuser=(id)=>{
    //     axios.post("http://127.0.0.1:8080/updateuser/",id)
    //     .then((result)=>{
    //         console.log(result)
    //         setData(result.data.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    const deleteuser=(id)=>{
        axios.post("http://127.0.0.1:8080/deleteuser/"+id)
        .then((result)=>{
            console.log(result)  
            alert("User deleted successfully")  
            viewallfn();       
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // const likeuser=(id)=>{
    //     console.log(id)
    //     axios.post("http://127.0.0.1:8080/likeuser/"+id)
    //     .then((result)=>{
    //         console.log(result)            
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    
    useEffect(()=>{
        viewallfn();
    },[])
  return (
    <div>
        <div className='adminhome'>
              <AdminNavbar/>
        
        </div>
        <img src={adminuserlistbgimg} id='adminuserlistbgimg' alt='adminuserlistbgimg'/>

        <div className='container'>
        <div className="adminuserlist">
        <center>    
                <h2 id='adminuserlistheading'>User List</h2><br/>
                <div>                    
                      <table border={1} id='adminuserlisttable'>
                          <thead>
                              <tr className='adminuserlisttabletr'>
                                  <th className='adminusertablelabel'>Sl.No</th>
                                  <th className='adminusertablelabel'>Photo</th>
                                  <th className='adminusertablelabel'>Name </th>
                                  <th className='adminusertablelabel'>Type of Employement</th>
                                  <th className='adminusertablelabel'>Age</th>
                                  <th className='adminusertablelabel'>Employee ID</th>
                                  <th className='adminusertablelabel'>Email</th>
                                  <th className='adminusertablelabel'>Password</th>
                                  <th className='adminusertablelabel'>Options</th>
                              </tr>
                          </thead>

                        {
                            data.length > 0 ?
                            data.map((item, index)=>(
                                <tbody key={index}>
                                    <tr className='adminuserlisttabletr'>
                                        <td className='adminusertablelabel'>{index + 1}</td>
                                        <td className='adminusertablelabel'><img id='adminuserlistimg' alt='adminoneuserimg' src={`http://127.0.0.1:8080/${item.image.filename}`}/></td>
                                        <td className='adminusertablelabel'>{item.empname}</td>
                                        <td className='adminusertablelabel'>{item.typeofemp}</td>
                                        <td className='adminusertablelabel'>{item.age}</td>
                                        <td className='adminusertablelabel'>{item.empid}</td>
                                        <td className='adminusertablelabel'>{item.email}</td>
                                        <td className='adminusertablelabel'>{item.password}</td>
                                        <td className='adminusertablelabel'><button onClick={()=>{viewoneuser(item._id)}} id='adminuserlistviewbtn'>View</button>&nbsp;
                                        <button onClick={()=>{deleteuser(item._id)}} id='adminuserlistdelbtn'>Delete</button>&nbsp;
                                        <div>
                                            {
                                            item.isActive?
                                            <button onClick={()=>{actdeactUser(item._id)}} id='userlistdeactivate'>Deactivate</button>
                                                
                                            :
                                            <button onClick={()=>{actdeactUser(item._id)}} id='userlistactivate'>Activate</button>
                                            }
                                        {/*                                             
                                            act?<button onClick={()=>{actdeactUser(item._id)}} id='userlistactivate'>Activate</button>:<button onClick={()=>{actdeactUser(item._id)}} id='userlistdeactivate'>Deactivate</button>
                                         */}
                                            
                                        </div>
                                        
                                        </td>
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

export default Adminuserlist