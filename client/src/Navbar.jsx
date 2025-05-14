import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'
import './Navbar.css';
import { Link} from 'react-router-dom';

function NavbarLandingPage() {
  // const nvar=useNavigate;
  //   const lognav=()=>{
  //       nvar("/login/");
  //   }
  //   const regnav=()=>{
  //       nvar("/register");
  //   }
  return (
    <div>
      <nav className="navbarlandingpage">
        <Container>
          <div className="navrightlandingpage">
            <button className="custombtnlandingpage" ><Link to={"/login"} className='mainnav'>LOGIN</Link></button>
            <button className="custombtnlandingpage" ><Link to={"/register"} className='mainnav'>REGISTRATION</Link></button>
            <button className="custombtnlandingpage" ><Link to={"/adminlogin"} className='mainnav'>ADMIN LOGIN</Link></button>

          </div>
        </Container>
      </nav>
    </div>
  );
}

export default NavbarLandingPage;
