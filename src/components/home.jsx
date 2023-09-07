import React from "react";
import './home.css';
import image from '../components/images/thully.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import background from '../components/images/background.jpeg';



function home() {

  return (
    
    <div className="container d-md-flex" id='home' style={{ backgroundImage: `url(${background})`, opacity:'1.0' }}>
      <div className="m-5"><Image src={image} fluid /></div> 
       <div className="m-5" id="b1" style={{position:"relative", left:"-10%", top:"40px"}}>
        <h3 className="text-start text-dark my-5">Thulisile Twesha <br/>
         Junior Software Developer</h3>
        
        <p>
          I am a Junior Web Developer who is interested in 
          Front-end project.I am a dedicated, and hardworking 
          person. My goal is to create amazing websites,and web 
          based applications that drive your business. I have 
          experience in Python,Html,CSS and JavaScript.
        </p>
        <br/>
        <br/>
        <div style={{position:"relative", left:"-10%",}}>
        <Button variant="secondary">Download My CV</Button>{' '}
        <Button variant="secondary">Get in touch</Button>{' '}
      
        </div>
      
        </div>
    </div>
  );
}

export default home;
