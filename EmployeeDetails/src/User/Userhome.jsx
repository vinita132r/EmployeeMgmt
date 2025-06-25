import React, { useEffect } from 'react';
import './Userhomestyle.css';
import userhomepic from '../asserts/userhome.png'
import Usernavbar from './Usernavbar';
import { useNavigate } from 'react-router-dom';


function Userhome() {
  const nvar=useNavigate()
  useEffect(()=>{

    if(localStorage.getItem('userId')){
      nvar("/userhome")
    }else{
      nvar("/login")
    }
  },[])
  return (
    <div>
        <div className='userhome'>
              <Usernavbar/>

              <div id='userhometext'>
                <center>
                {/* Welcome to Employee Management */}
                <img src={userhomepic} alt='userhomepic' id='userhomepicstyle' />
                </center>
              </div>
              
        </div>
    </div>
  )
}

export default Userhome