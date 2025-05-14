import React from 'react';
import './NewLandingPage.css';
import Navbar from './Navbar';

import homepic from '../src/asserts/emphome.webp'

function NewLandingPage() {
  return (
    <>
      <Navbar/>
      <div className="bodylandingpage">
        <img src={homepic} alt="emphome" id='emphomebgimg'/>
        <center><div id="homeheading">Welcome to Employee Management System...</div></center>
      </div>
    </>
  );
}

export default NewLandingPage;
