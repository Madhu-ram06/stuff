import React from 'react'
//import Navbar from './Navbar';
import Footer from './Footer';
import aboutUsImage from './vlcsnap-2020-02-13-18h06m58s399.png';
import bg from './Cubes-Grey-Seamless-Pattern-For-Website-Background.jpg'
import './AboutUs.css'

const AboutUs=()=>  {
    return(
       
        <><>
            

            <div className='about-container'>
                <br /> <br />
                <img classname="aboutus" src={aboutUsImage} alt="aboutUs" width={"100%"} height={"600px"}></img>
                <br /><br /> <br />
                <div className='about-description'>

                    <p style={{ fontSize: "34px", fontWeight: "bold", textAlign:"center"}}>ABOUT US</p>
                    <br /><br />
                    <p classname="text" style={{textAlign:"center"}}>It is believed that the best travel plans are made on the spur of the moment. But nothing can prepare you for<br />
                        the reality of being told that your favourite hotel or restaurant is unable to accomodate you due to your<br />
                        hasty preparation</p>
                    <br /><br /> <br />
                    <p classname="text" style={{textAlign:"center"}}>We have a list of some of the most charming homestays/hotels/resorts in Wayanad. These peaceful areas<br />
                        are great for enjoying and reeboting from the hustle and bustle, and are located in quaint surroundings just<br />
                        a drive away from the city's bustle.</p>
                    <br /> <br /><br />
                    <p style={{ fontSize: "14px", fontWeight: "bold",textAlign:"center" }}>Numbers fact</p>
                    <br /> <br /><br />
                    <div className='stats-container' style={{textAlign:"center"}}>
                        <span className='stats'>
                            <h1>320</h1>
                            <p>Clients</p>
                        </span>
                        <span className='stats'>
                            <h1>24</h1>
                            <p>Rooms</p>
                        </span>
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
            <br /> <br /> <br /> <br /> <br /> <br />
            <div id="abouttestimonial">
                <div style={{ backgroundImage: `url(${bg})`, width:"100%", height:"700px"}}  >
                   <div id="bgcontainer" style={{textAlign:"center"}}> 
                       <p style={{marginTop:"6%", color:"grey",fontSize:"small",fontWeight:"500"}}>T E S T I M O N I A L</p>
                       <p id="font"style={{fontSize:"40px",marginTop:"4%"}}>What Client Say</p>
                       <p id="text">    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis <br/>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p id="adam">Adam Levine- Review from TripAdvisor</p>
                   </div>
                </div>


            </div>
        </><hr /><Footer /></>
   

      
    )
    }

   

export default AboutUs;