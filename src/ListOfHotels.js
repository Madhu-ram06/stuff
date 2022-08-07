import './ListOfHotels.css'
import React from "react";
import Footer from './Footer';
import partA1 from './images/partA1.jpg'
import partA2 from './images/partA2.jpg'
import partA3 from './images/partA3.jpg'
import bamboo from './images/bamboo-resort.jpg'
import candle from './images/candle lighr resort.png'
import grassland from './images/grass land resort.jpg'

const ListOfHotels=()=>{
    return(
        <><div id="page-container">


            <div id="partA">
                <img src={partA1} alt="classic room 1" width={"80px"} height={"250px"} style={{ position: "absolute", left: "5%", top: "20%" }}></img>
                <div id="textblock">
                    <pre id="heading">{`The Bamboo`}<br />{`Resort`}
                    </pre>
                    <p id="partA-text">Start from <span style={{ color: "#fc0d2d", fontSize: "22px", fontWeight: "bold" }}> Rs.3900</span>/Night</p>
                    <p style={{ color: "grey", position: "absolute", bottom: "30%", width: "80%", fontSize: "14px", lineHeight: "1.8" }}>
                        We have a list of some of the most charming<br /> homestays/hotels/resorts in Wayanad. These peaceful areas
                        are great for enjoying and reeboting from the hustle and bustle, and are located in quaint surroundings just
                        a drive away from the city's bustle.
                    </p>
                    <div style={{ position: "absolute", bottom: "13%" }}>
                        <p id='status'>Status: <span style={{ color: "#0bbd08" }}>Available</span></p>
                        <p id="status">Deposit: Not required</p>
                        <p id="status">Beds: 01</p>
                        <p id="status">Passenger: 02</p>
                    </div>
                </div>
                <div style={{ position: "absolute", width: "40%", right: "5%", top: "10%" }}>
                    <img src={bamboo} alt="the bamboo resort" width={"100%"} height={"450px"}></img>
                </div>
            </div>
            <br />
            <div id="partA">
                <img src={partA2} alt="classic room 2" width={"80px"} height={"250px"} style={{ position: "absolute", right: "5%", top: "20%" }}></img>
                <div id="textblock1">
                    <pre id="heading">{`Grass Land`}<br />{`Resort`}
                    </pre>
                    <p id="partA-text">Start from <span style={{ color: "#fc0d2d", fontSize: "22px", fontWeight: "bold" }}> Rs.3900</span>/Night</p>
                    <p style={{ color: "grey", position: "absolute", bottom: "30%", width: "80%", fontSize: "14px", lineHeight: "1.8" }}>
                        We have a list of some of the most charming<br /> homestays/hotels/resorts in Wayanad. These peaceful areas
                        are great for enjoying and reeboting from the hustle and bustle, and are located in quaint surroundings just
                        a drive away from the city's bustle.
                    </p>
                    <div style={{ position: "absolute", bottom: "13%" }}>
                        <p id='status'>Status: <span style={{ color: "#0bbd08" }}>Available</span></p>
                        <p id="status">Deposit: Not required</p>
                        <p id="status">Beds: 01</p>
                        <p id="status">Passenger: 02</p>
                    </div>
                </div>
                <div style={{ position: "absolute", width: "40%", right: "5%", top: "10%", left: "5%" }}>
                    <img src={grassland} alt="the grassland resort" width={"100%"} height={"450px"}></img>
                </div>
            </div>


            <div id="partA">
                <img src={partA3} alt="classic room 3" width={"80px"} height={"250px"} style={{ position: "absolute", left: "5%", top: "20%" }}></img>
                <div id="textblock">
                    <pre id="heading">{`Candle Light`}<br />{`Resort`}
                    </pre>
                    <p id="partA-text">Start from <span style={{ color: "#fc0d2d", fontSize: "22px", fontWeight: "bold" }}> Rs.9900</span>/Night</p>
                    <p style={{ color: "grey", position: "absolute", bottom: "30%", width: "80%", fontSize: "14px", lineHeight: "1.8" }}>
                        We have a list of some of the most charming<br /> homestays/hotels/resorts in Wayanad. These peaceful areas
                        are great for enjoying and reeboting from the hustle and bustle, and are located in quaint surroundings just
                        a drive away from the city's bustle.
                    </p>
                    <div style={{ position: "absolute", bottom: "13%" }}>
                        <p id='status'>Status: <span style={{ color: "#fc0d2d" }}>01 Room Left!</span></p>
                        <p id="status">Deposit: Required 50%</p>
                        <p id="status">Beds: 01</p>
                        <p id="status">Passenger: 02</p>
                    </div>
                </div>
                <div style={{ position: "absolute", width: "40%", right: "5%", top: "10%" }}>
                    <img src={candle} alt="the candle resort" width={"100%"} height={"450px"}></img>
                </div>
            </div>
            <button id="see">SEE MORE ROOMS</button>





        </div><>
                <Footer />
            </></>
    )
}
export default ListOfHotels;