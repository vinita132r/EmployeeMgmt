import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './UserNotificationstyle.css';
import notifybg from '../asserts/emphome.webp';
import Usernavbar from './Usernavbar';

function UserNotification() {
    const [notifications, setNotifications] = useState([]);

    const fetchNotifications = async () => {
        try {
            const userid = localStorage.getItem('userId');
            console.log('Fetching notifications for userid:', userid);
            if (!userid) {
                console.log('No userid found in localStorage');
                return;
            }
            const res = await axios.post('http://127.0.0.1:8080/getusernotifications', { userid });
            console.log('Notifications response:', res.data);
            setNotifications(res.data.data || []);
        } catch (err) {
            console.error('Error fetching notifications:', err);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    return (
        <div>
            <div className='userhome'>
                <Usernavbar />
            </div>
            <img src={notifybg} id='usernotifybgimg' alt='background' />

            <div className='container'>
                <center>
                    <div id='usernotifycard'>
                        <h3 id='usernotifyheading'>Your Notifications</h3>
                        <div className='userpgnotifysection'>
                            {notifications.length > 0 ? notifications.map((item, index) => (
                                <Card id='usernotifyeachcard' key={index}>
                                    <Card.Body>
                                        <Card.Text id='usernotifytext'>
                                            Your update on <strong>{new Date(item.updatedate).toLocaleDateString()}</strong> has been <strong>verified</strong> by Admin.<br />
                                            <strong>Verified At:</strong> {new Date(item.verifiedate).toLocaleString()}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )) : <h5 className='usernotify-empty'>No Verified Notifications Yet</h5>}
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default UserNotification;
