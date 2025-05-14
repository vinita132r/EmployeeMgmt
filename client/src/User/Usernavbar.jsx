import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import './Usernavbarstyle.css'

function Usernavbar() {
    
    const nvar=useNavigate()
    const onLogout=()=>{
        localStorage.removeItem("userId")
        nvar('/login')
    }

  return (
    <div>
          <div className='userhome'>
              <div className='usernav'>
                  <Nav defaultActiveKey="/home">
                      <Nav.Item>
                          <Nav.Link className='navbaritem'><Link to={'/userhome'} className='usernavbartitle'>Home</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='navbaritem'><Link to={'/userlist'} className='usernavbartitle'>List of Users</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='navbaritem'><Link to={'/userprofile/:id'} className='usernavbartitle'>Profile</Link></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="link-1" className='navbaritem'><button onClick={onLogout} className='usernavbarlogout' >Logout</button></Nav.Link>
                      </Nav.Item>
                  </Nav>


              </div>

          </div>
</div>
  )
}

export default Usernavbar