import './ResortVariants.css'
import React from 'react';
import iconstack from './images/iconstack.jpg'
import two1 from './images/two1.jpg'
import two2 from './images/two2.jpg'
import two3 from './images/two3.jpg'
import three1 from './images/three1.jpg'
import three2 from './images/three2.jpg'
import three3 from './images/three3.jpg'
import four1 from './images/four1.jpg'
import four2 from './images/four2.jpg'
import four3 from './images/four3.jpg'
import variantImg from './images/variantImg.jpg'
import Footer from './Footer';
import trustpilot from './images/trustpilot.jpg'

const ResortVariants=()=>{
    return(
        <div id="resort-container">
            `<div id="one">
                <div id="textid">
                    <p id="ddd">Casa Lake Resort</p>
                    <p>We provide high quality services !</p>
                    <p>Pick a room and enjoy the best vacation of your life</p>
                    <br /><br />
                    <button id="bud">Discover rooms</button>
                </div>
                <img src={iconstack} alt="all icons" width={"70%"} height={"350px"} style={{ marginLeft: "17%" }}></img>
            </div>


            <div id="two">
                <div id="completecard">
                    <div id="image-container">
                        <img src={two1} alt="First " width={"60%"} height={"500px"} style={{ position: "absolute", left: "0" }}></img>
                        <div id="subimgcontainer">
                            <img id="fleximgs" src={two2} alt="Second " width={"100%"} height={"45%"}></img>
                            <img id="fleximgs" src={two3} alt="Third " width={"100%"} height={"45%"}></img>
                        </div>
                    </div>
                    <p id="feature">Feature</p>
                    <p>Looking for a trip with your daughter or friends? This room provides all you need</p>
                    <button id="book1">Rent now !</button><br /><br /><br />
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr>
                    <div className='stats-container' style={{ textAlign: "center" }}>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Rooms</h1>
                            <p style={{ fontSize: "13px" }}>6 rooms</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Living area</h1>
                            <p style={{ fontSize: "13px" }}>160 m.sq</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Balcony view</h1>
                            <p style={{ fontSize: "13px" }}>On the Sea</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Price per visitor per night</h1>
                            <p style={{ fontSize: "13px" }}>$799 per day</p>
                        </span>
                    </div>
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr>
                </div>




                <div id="completecard">
                    <div id="image-container">
                        <img src={three1} alt="First " width={"60%"} height={"500px"} style={{ position: "absolute", left: "0" }}></img>
                        <div id="subimgcontainer">
                            <img id="fleximgs" src={three2} alt="Second " width={"100%"} height={"45%"}></img>
                            <img id="fleximgs" src={three3} alt="Third " width={"100%"} height={"45%"}></img>
                        </div>
                    </div>
                    <p id="feature">Feature</p>
                    <p>Rooms provide a great feelings of energy with unique mood inside. Great for your people.</p>
                    <button id="book1">Rent now !</button><br /><br /><br />
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr>
                    <div className='stats-container' style={{ textAlign: "center" }}>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Rooms</h1>
                            <p style={{ fontSize: "13px" }}>4 rooms</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Living area</h1>
                            <p style={{ fontSize: "13px" }}>90 m2</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Balcony view</h1>
                            <p style={{ fontSize: "13px" }}>On the Jungle</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Price per visitor per night</h1>
                            <p style={{ fontSize: "13px" }}>$599 per day</p>
                        </span>
                    </div>
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr>
                </div>





                <div id="completecard">
                    <div id="image-container">
                        <img src={four1} alt="First " width={"60%"} height={"500px"} style={{ position: "absolute", left: "0" }}></img>
                        <div id="subimgcontainer">
                            <img id="fleximgs" src={four2} alt="Second " width={"100%"} height={"45%"}></img>
                            <img id="fleximgs" src={four3} alt="Third " width={"100%"} height={"45%"}></img>
                        </div>
                    </div>
                    <p id="feature">Feature</p>
                    <p>Looking for a trip with your daughter or friends? This room provides all you need</p>
                    <button id="book1">Rent now !</button><br /><br /><br />
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr>
                    <div className='stats-container' style={{ textAlign: "center" }}>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Rooms</h1>
                            <p style={{ fontSize: "13px" }}>2 rooms</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Living area</h1>
                            <p style={{ fontSize: "13px" }}>160 m.sq</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Balcony view</h1>
                            <p style={{ fontSize: "13px" }}>On the Sea</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Price per visitor per night</h1>
                            <p style={{ fontSize: "13px" }}>$399 per day</p>
                        </span>
                    </div>
                    <hr style={{ height: "1px", backgroundColor: "gray" }}></hr><br /><br />
                    <img src={variantImg} alt="Variant" width={"100%"} height={"600px"}></img>
                </div>

            </div>
            <br /> <br /> <br /> <br /> <br /> <br />
            <div id="three">
                <div id="textid">
                    <p id="ddd">Book your room today</p>
                    <div className='stats-container' style={{ textAlign: "center" }}>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Prices starting from</h1>
                            <p style={{ fontSize: "13px" }}>$499 per day</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>We got your trust</h1>
                            <p style={{ fontSize: "13px" }}>4,9 overall rating</p>
                        </span>
                        <span className='stats'>
                            <h1 style={{ fontSize: "14px", color: "gray", lineHeight: "2" }}>Incredible Kitchen</h1>
                            <p style={{ fontSize: "13px" }}>Michelline Awwards</p>
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "1%", justifyContent: "center" }}>
                        <button id="style1">Book your room</button>&emsp;&emsp;
                        <button id="style2">Check accomodation</button>
                    </div><br/><br/>
                    <img src={trustpilot} alt={trustpilot} width={"280px"} height={"60px"}></img>
                    

                </div>
                <Footer />
            </div>

       
        </div>
    )
}

export default ResortVariants;