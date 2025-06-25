import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AdminNotificationstyle.css';
import adminnotifybgimg from '../asserts/emphome.webp';

function AdminNotification() {
    const [likedata, setLikedata] = useState([]);
    const [dailyupd, setDailyupd] = useState([]);

    const viewdailyupd = () => {
        axios.post("http://127.0.0.1:8080/getallupdates")
            .then((result) => {
                setDailyupd(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const viewlikedata = () => {
        axios.post("http://127.0.0.1:8080/findliker")
            .then((result) => {
                console.log(result);
                
                setLikedata(result.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const verifyUpdate = async (pid) => {
        await axios.post(`http://127.0.0.1:8080/verifyupdate/${pid}`)
        .then((result) => {
            console.log(result);
            
            alert('Verified successfully');
            viewdailyupd(); // Refresh updates
        })
        .catch((err) => {
            console.error(err);
            alert('Verification failed');
        })
    };


    useEffect(() => {
        viewlikedata();
        viewdailyupd();
    }, []);

    return (
        <div>
            <div className='adminhome'>
                <AdminNavbar />
            </div>
            <img src={adminnotifybgimg} id='adminnotifybgimg' alt='adminuserlistbgimg' />

            <div className='container'>
                <center>
                    <div id='adminnotifycard'>
                        <h3 id='adminnotifyheading'>Notifications</h3>

                        {/* Like Notifications */}
                        <div className='adminpgnotifysection'>
                            {likedata?.length > 0 ?
                                likedata.map((item, index) => (
                                    <Card id='adminnotifyeachcard' key={index}>
                                        <Card.ImgOverlay>
                                            <Card.Text id='adminnotifyfirstcardtext'>
                                            <img id='adminnotifyimg' src={`http://127.0.0.1:8080/${item?.userid.image?.filename}`}/>&nbsp;&nbsp;
                                                {item?.userid?.empname} liked {item?.guestid?.empname} &nbsp;&nbsp;
                                            <img id='adminnotifyimg' src={`http://127.0.0.1:8080/${item?.guestid.image?.filename}`}/>
                                            
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                )) : <h4>No Likes Found</h4>
                            }
                        </div>

                        {/* Daily Updates */}
                        <div className='adminpgnotifysection'>
                            {dailyupd?.length > 0 ?
                                dailyupd.map((item, index) => (
                                    <Card id='adminnotifyeachcard' key={index}>
                                        <Card.Body className='notify-card-body'>
                                            <Card.Text id='adminnotifytext' className='notify-card-text'>
                                            <img id='adminnotifyimg' src={`http://127.0.0.1:8080/${item?.employeeid?.image?.filename}`}/>&nbsp;&nbsp;
                                                {item?.employeeid?.empname} submitted daily update on {new Date(item.updatedate).toLocaleDateString()} <br />
                                                <strong>Report:</strong> {item.dailyupdate} <br />
                                                <strong>Status:</strong> {item.status}
                                            </Card.Text>
                                            {item.status === 'pending' &&
                                                <Button
                                                    variant='outline-primary'
                                                    size='sm'
                                                    onClick={() => verifyUpdate(item._id)}
                                                    className='verifybtn'
                                                >
                                                    Verify
                                                </Button>
                                            }
                                        </Card.Body>
                                    </Card>

                                )) : <h4>No Daily Updates Found</h4>
                            }
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default AdminNotification;
