import React, { useEffect, useState } from 'react';
import './Userprofilestyle.css';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Usernavbar from './Usernavbar';

function Userdailyupdate() {
  const [dailyupd, setDailyupd] = useState({
    updatedate:'',
    dailyupdate:''
  })

    const id=localStorage.getItem("userId")

    

    const onChgdata=(e)=>{
      console.log(e.target.value);
      
        setDailyupd({...dailyupd,[e.target.name]:e.target.value});

    }

    const onSaveDailyUpd=()=>{
        axios.post("http://127.0.0.1:8080/savedailyupdate/"+id,dailyupd)
        .then((result)=>{
            console.log(result)
            // alert("Update added successfully")
            alert(result.data.message)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
  

  return (
    <div>
      <Usernavbar/>
        <div className="userdailyupdate">
        <center>    
                <br/>
                <h2>Your Daily Updates</h2><br/>
                <div  className='dailyupdatedetails'>
                    {/* {
                      data.length>0 ?
                      data.map((item,index)=>()
                    } */}
                    

                        <label className='userdailyupdlabel'>Date : </label>
                        <input type='date' name='updatedate' onChange={onChgdata}  />
                        <br/><br/>
                        
                        <label className='userdailyupdlabel'>Report : </label>
                        <textarea name='dailyupdate' row='5' onChange={onChgdata}/>
                        
                        <br/><br/>

                        <button type='submit' id='dailyupdatebtn'  onClick={onSaveDailyUpd}>Submit</button>
                        <br/><br/>
                        
                        
                
                </div>

              <br/>

            </center>
        </div>    </div>
  )
}

export default Userdailyupdate