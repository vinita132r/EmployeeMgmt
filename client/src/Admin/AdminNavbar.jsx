import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './AdminNavbarstyle.css'
import { Link, useNavigate } from 'react-router-dom';

function AdminNavbar() {
    const nvar=useNavigate()

    const onAdminLogout=()=>{
        localStorage.removeItem("userId")
        nvar('/adminlogin')
    }

  return (
    <div>
        <div className='adminnav'>
                  <Nav defaultActiveKey="/home">
                      <Nav.Item>
                          <Nav.Link href="/home" className='adminnavbaritem'><Link to={'/adminhome'}  className='adminnavtitle'>Home</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='adminnavbaritem'><Link to={'/adminuserlist'} className='adminnavtitle'>List of Users</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='adminnavbaritem'><Link to={'/adminnotify'} className='adminnavtitle'>Notifications</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='adminnavbaritem'><button onClick={onAdminLogout} id='adminlogoutbtn'>Logout</button></Nav.Link>
                      </Nav.Item>
                  </Nav>
              </div>
    </div>
  )
}

export default AdminNavbar