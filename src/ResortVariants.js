import './ResortVariants.css'
import React from 'react';
import iconstack from './images/iconstack.jpg'
const ResortVariants=()=>{
    return(
        <div id="resort-container">
           <div id="one">
                <div id="textid">
                            <p id="ddd">Casa Lake Resort</p>
                            <p>We provide high quality services !</p>
                            <p>Pick a room and enjoy the best vacation of your life</p>
                            <br/><br/>
                            <button id="bud">Discover rooms</button>
                </div>
                <img src={iconstack} alt="all icons" width={"70%"} height={"350px"} style={{marginLeft:"17%"}}></img>
        </div>
    </div>
    )
}

export default ResortVariants;