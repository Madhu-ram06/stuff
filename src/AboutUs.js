import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import aboutUsImage from './Landsend Resort.JPG';
import bg from './Cubes-Grey-Seamless-Pattern-For-Website-Background.jpg'
import './AboutUs.css'

const AboutUs=()=>  {
    return(
       
        <>
            <Navbar />
           
            <div className='about-container'>
                <br/> <br/> 
                <img classname="aboutus" src={aboutUsImage} alt="aboutUs" width={"100%"} height={"570px"} style={{minWidth:"1024px"}}></img>
                <br/><br/> <br/>
                <div className='about-description'>
                    
                <p style={{fontSize:"34px",fontWeight:"bold"}}>ABOUT US</p>
                <br/><br/> 
               <p classname="text">It is believed that the best travel plans are made on the spur of the moment. But nothing can prepare you for<br/>
                                   the reality of being told that your favourite hotel or restaurant is unable to accomodate you due to your<br/>
                                                    hasty preparation</p>
                                                    <br/><br/> <br/>                               
                <p classname="text">We have a list of some of the most charming homestays/hotels/resorts in Wayanad. These peaceful areas<br/>
                                    are great for enjoying and reeboting from the hustle and bustle, and are located in quaint surroundings just<br/>
                                                    a drive away from the city's bustle.</p>
                <br/> <br/><br/>
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Numbers fact</p>
                <br/> <br/><br/>
                <div className='stats-container'>
                <span className='stats'>
                    <h1>320</h1>
                    <p>Clients</p>
                </span>
                <span className='stats'>
                    <h1>24</h1>
                    <p>Rooms</p>
                </span >
                <span className='stats'>
                    <h1>50</h1>
                    <p>Staffs</p>
                </span>
                <span className='stats'>
                    <h1>12</h1>
                    <p>Awards</p>
                </span>
                </div>
                </div>

        </div>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <div classname="abouttestimonial">
            <img src={bg} alt="background" width={"100%"} height={"700px"}></img>
        </div>
        <hr/>


       <Footer/>
        </>

      
    )
    }

   

export default AboutUs;