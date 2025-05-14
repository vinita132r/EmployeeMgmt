import React, { useEffect, useState } from 'react'
import './Admindashboardstyle.css';
import AdminNavbar from './AdminNavbar';
import axios from 'axios'

import adminhomebgimg from '../asserts/emphome.webp'


function Admindashboard() {

  const[count,setCount]=useState()
  const userCount=()=>{
    axios.post("http://127.0.0.1:8080/findalluser")
    .then((result)=>{
      console.log(result)
      setCount(result.data.data.length)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    userCount()
  },[])
  return (
    <div>
        <div className='adminhome'>
              <AdminNavbar/>
        
        </div>
        <img src={adminhomebgimg} id='adminhomebgimg' alt='adminhomebgimg'/>

        {/* count of users*/}

        <div className='adminhomedetails'>
            <center>
                <div id='adminhomeusercount'>Total number of users <div id='usercountvalue'>{count}</div></div>
                {/* <div onChange={userCount} */}
            </center>
        </div>
    </div>
  )
}

export default Admindashboard