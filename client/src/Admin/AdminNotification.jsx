import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AdminNavbar from './AdminNavbar';
import Card from 'react-bootstrap/Card';
import './AdminNotificationstyle.css';

// import pic from '../asserts/pic.jpg'
import adminnotifybgimg from '../asserts/emphome.webp'


function AdminNotification() {
    const[likedata,setLikedata]=useState()

    const viewlikedata=()=>{
        axios.post("http://127.0.0.1:8080/findliker")
        .then((result)=>{
            console.log(result)
            setLikedata(result.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        viewlikedata();
    },[])

  return (
    <div>
        <div className='adminhome'>
              <AdminNavbar/>
        
        </div>
        <img src={adminnotifybgimg} id='adminnotifybgimg' alt='adminuserlistbgimg'/>

        {/* notification section*/}

        <div className='container'>
            <center>

                <div id='adminnotifycard'>
                    <h3 id='adminnotifyheading'>Notifications</h3>
                      <div className='adminpgnotifysection'>
                        {
                        likedata?.length>0?
                        likedata.map((item,index)=>(
                            <Card id='adminnotifyeachcard' key={index}>
                              {/* <Card.Img src={pic} alt="Card image" id='adminnotifycardimg'/> */}
                              <Card.ImgOverlay>
                                  {/* <Card.Title>Card title</Card.Title> */}
                                  <Card.Text id='adminnotifytext'>
                                      {item.userid.empname} liked {item.guestid.empname}
                                  </Card.Text>
                                  {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                              </Card.ImgOverlay>
                          </Card>

                        )):<h3>No data found</h3>
                          
                    }
                      </div>

                </div>
            </center>
        </div>
    </div>
  )
}

export default AdminNotification