import React from 'react'

import Footer from './Footer';
import bg1 from './home_1.jpg';
import imgcard1 from './Casa Lake Resort.jpg'
import location from './location.png'
import rating from './rating.jpg'
import imgcard2 from './images/Jungle Beat.jpg'
import imgcard3 from './images/Landsend Resort.JPG'
import imgcard4 from './images/The Willow Resort.jpg'
import dollar from './images/dollar.jpg'
import award from './images/award.jpg'
import check from './images/check.jpg'
import AboutImg1 from './images/AboutImg1.jpg'
import AboutImg2 from './images/AboutImg2.jpg'
import arrows from './images/arrows.jpg'
import testimonial1 from './images/testimonial1.jpg'
import testimonial2 from './images/testimonial2.jpg'
import testimonial3 from './images/testimonial3.jpg'
import article1 from './images/How a single day-use hotel.jpg'
import article2 from './images/list of the 20 COVID-19.jpg'
import article3 from './images/article33.jpg'
import article4 from './images/article4.jpg'
import article5 from './images/article5.jpeg'
import book from './images/book.jpg'


 

import './Home.css'

const Home=()=>  {
    return(
       
        <><>
            
            <div classname="home">
               <div id="first">
                    <div id="part1">
                        <div id="wrap">
                           <button style={{backgroundColor:"#120647",color:"white",borderRadius:"8px",fontWeight:"bold"}}>Trusted</button>
                           <span style={{color:"grey",fontSize:"14px"}}> The best hotel booking site 2021</span>
                        </div>
                        <div id="dreams">
                            <div id="d">We make dreams<br/>
                            come true!</div>
                            <p style={{color:"grey",fontFamily:"Verdana",marginTop:"8%",fontSize:"14px",lineHeight:"2"}}> With Traveliva you can stay in iconic hotels, picturesque resorts,<br/> and national safari lodges that interpret the hospitality tradition</p>
                        </div>

                    </div>

                    <div id="part2">
                        <img src={bg1} alt="bg home" width={"100%"} height={"670px"}></img>
                        
                    </div>

               </div>


               <div id="second">
                <button id="hotel"  >HOTELS</button>
                <p id="tt">Choose the best place to stay </p>
                <p id="b">We prepare the best choices of places with high quality<br/>&ensp;&ensp;that is guaranteed by the hotel assessment agency.</p>
             
              <div id="card-container">
                <div id="col">
                    <img src={imgcard1} alt="card1" width={"100%"} height={"270px"} style={{borderRadius:"14px"}}></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px"}}>Casa Lake Resort</h3>
                    <span>
                        <img src={location} alt="location" width={"20px"} height={"20px"} style={{marginLeft:"20px",marginTop:"5px"}}></img><span>Karaphuza</span></span>
                    <br/>
                    <span style={{marginLeft:"20px"}}>
                        <img src={rating} alt="rating" width={"140px"} height={"40px"} style={{marginTop:"15px"}}></img><span>(4.9)</span> </span>
              <br/> <br/> <br/> <br/>
               <div id="money">Rs.3400/day</div>
                </div>


                <div id="col">
                    <img src={imgcard2} alt="card1" width={"100%"} height={"270px"} style={{borderRadius:"14px"}}></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px"}}>Jungle Beat</h3>
                    <span>
                        <img src={location} alt="location" width={"20px"} height={"20px"} style={{marginLeft:"20px",marginTop:"5px"}}></img><span>Ambalavayal</span></span>
                    <br/>
                    <span style={{marginLeft:"20px"}}>
                        <img src={rating} alt="rating" width={"140px"} height={"40px"} style={{marginTop:"15px"}}></img><span>(4.8)</span> </span>
                        <br/> <br/> <br/> <br/>
                         <div id="money">Rs.1300/day</div>
                </div>
                
                <div id="col">
                    <img src={imgcard3} alt="card1" width={"100%"} height={"270px"} style={{borderRadius:"14px"}}></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px"}}>Landsend Resort</h3>
                    <span>
                        <img src={location} alt="location" width={"20px"} height={"20px"} style={{marginLeft:"20px",marginTop:"5px"}}></img><span>Meppadi</span></span>
                    <br/>
                    <span style={{marginLeft:"20px"}}>
                        <img src={rating} alt="rating" width={"140px"} height={"40px"} style={{marginTop:"15px"}}></img><span>(4.7)</span> </span>
                        <br/> <br/> <br/> <br/>
                         <div id="money">Rs.4200/day</div>
                </div>


                <div id="col">
                    <img src={imgcard4} alt="card1" width={"100%"} height={"270px"} style={{borderRadius:"14px"}}></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px"}}>The Willow Resort</h3>
                    <span>
                        <img src={location} alt="location" width={"20px"} height={"20px"} style={{marginLeft:"20px",marginTop:"5px"}}></img><span>Ambalavayal</span></span>
                    <br/>
                    <span style={{marginLeft:"20px"}}>
                        <img src={rating} alt="rating" width={"140px"} height={"40px"} style={{marginTop:"15px"}}></img><span>(4.9)</span> </span>
                        <br/> <br/> <br/> <br/>
                        <div id="money">Rs.6530/day</div>
                </div>
               


                </div>

        </div>

        

        <div id="third">
            <p id="tt" style={{fontSize:"44px"}}>Why you need to choose us </p>
            <p id="b" >&emsp;&emsp;We provide the best features to serve you to feel <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;while staying with us !</p>

            <div id="card2-container">
                <div id="col1">
                    <img src={dollar} alt="dollar" style={{position:"absolute",left:"38%"}}></img>
                    <h3 style={{position:"absolute",marginTop:"30%",left:"25%"}}>Best rates guaranteed</h3>
                    <p style={{position:"absolute",marginTop:"45%",left:"18%",textAlign:"justify",fontSize:"14px",lineHeight:"1.8"}}>&emsp;We provide honest and guaranteed<br/>
                    cheap prices for those of you who want
                       <br/>&emsp;to stay in a star hotel and top quality.</p><br/>
                    <p style={{color:"blue",fontWeight:"bold",position:"absolute",left:"37%",bottom:"6%"}}> Read more</p>
                </div>

                <div id="col1">
                    <img src={check} alt="dollar" style={{position:"absolute",left:"38%"}}></img>
                    <h3 style={{position:"absolute",marginTop:"30%",left:"25%"}}>No hidden charges</h3>
                    <p style={{position:"absolute",marginTop:"45%",left:"18%",textAlign:"justify",fontSize:"14px",lineHeight:"1.8"}}>&emsp;Guaranteed guarantee you can at any<br/> 
                                                                                                                                    time take your money back if you feel<br/>
                                                                                                                                    &emsp;&emsp;dissatisfied with our service.</p><br/>
                    <p style={{color:"blue",fontWeight:"bold",position:"absolute",left:"37%",bottom:"6%"}}> Read more</p>
                </div>

                <div id="col1">
                    <img src={award} alt="dollar" style={{position:"absolute",left:"38%"}}></img>
                    <h3 style={{position:"absolute",marginTop:"30%",left:"29%"}}>Exclusive Offers</h3>
                    <p style={{position:"absolute",marginTop:"45%",left:"18%",textAlign:"justify",fontSize:"14px",lineHeight:"1.8"}}>&emsp;We were named by Google Playstore <br/>
                                                                                                                                            in the category of the best website site in<br/>
                                                                                                                                        &emsp;&emsp;&emsp; 2021 with a perfect score.</p><br/>
                    <p style={{color:"blue",fontWeight:"bold",position:"absolute",left:"37%",bottom:"6%"}}> Read more</p>
                </div>
            </div>
        </div>


        <div id="fourth">
            <div id="section1">
            <img id="aboutImg1"src={AboutImg1} alt="aboutimage 1" width={"700px"} height={"600px"} ></img>
            </div>
            
            <div id="section2">
                <button id="traveliva" >TRAVELIVA</button>
                <p id="tta" style={{fontSize:"44px"}}>About Us </p>
                <pre id="b1">{`
With Traveliva, you can stay in iconic hotels, picturesque
resorts, and natural safari lodges that interpret the hospitality
tradition in a refreshingly modern way to create one-of-a-kind
experiences and lifelong memories.
        `}
                </pre>

                <ul style={{marginTop:"38%",color:"blue",fontSize:"18px",lineHeight:"2"}}>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                </ul>
                <button id="button">Learn More</button>
                
            </div>
        </div>


        <div id="fifth">
            
            <div id="section2" style={{marginLeft:"5%"}}>
                <button id="traveliva" >FEATURED</button>
                <p id="tta" style={{fontSize:"44px"}}>Mount Xanadu </p>
                <pre id="b1">{`
A premium boutique resort in Wayanad, nestled 3300 feet
above sea level in the mist-clad green environs of Wayanad,
surrounded by jaw-dropping vistas of Misty Mountains.
        `}
                </pre>

                <ul style={{marginTop:"38%",color:"blue",fontSize:"18px",lineHeight:"2"}}>
                    <li>Grandeur like never before</li>
                    <li>Activities and much more.</li>
                </ul>
                <button id="button">Learn More</button>
                
            </div>
            <div id="section1">
            <img id="aboutImg2"src={AboutImg2} alt="aboutimage 1" width={"700px"} height={"600px"} ></img>
            </div>
        </div>




        <div id="sixth">

        
        <p id="tt2" style={{fontSize:"44px"}}>What our clients say </p>
       <pre id='b2'>{`
These are the things that clients who have used our
features say about us.
              `}
       </pre>
       <img id="arrows"src={arrows} alt="arrows" width={"120px"} height={"50px"} ></img>
       <div id="card-container3">
            <div id="col3">
            <img src={testimonial1} alt="card1" width={"100%"} height={"70px"} ></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px",position:"absolute",top:"26%"}}>James Harden</h3>
                    <pre id="b1" style={{position:"absolute",top:"34%",fontSize:"17px"}}>{`
"The best hotel booking place. I like its features 
and also lots of discounts make myself more 
economical."
        `}
                </pre>
                <p style={{position:"absolute",bottom:"14%",fontSize:"15px",color:"grey"}}>Pro Husband</p>
                </div>




                <div id="col3">
                <img src={testimonial2} alt="card1" width={"100%"} height={"70px"} ></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px",position:"absolute",top:"26%"}}>Emilia Hunter</h3>
                    <pre id="b1" style={{position:"absolute",top:"34%",fontSize:"17px"}}>{`
"The best hotel booking place. I like its features 
and also lots of discounts make myself more 
economical."
        `}
                </pre>
                <p style={{position:"absolute",bottom:"14%",fontSize:"15px",color:"grey"}}>Great Wife</p>
                </div>



                <div id="col3">
                    <img src={testimonial3} alt="card1" width={"100%"} height={"70px"} ></img>
                    <h3 style={{marginLeft:"20px",marginTop:"10px",position:"absolute",top:"26%"}}>Alexis Cristiano</h3>
                    <pre id="b1" style={{position:"absolute",top:"34%",fontSize:"17px"}}>{`
"The best hotel booking place. I like its features 
and also lots of discounts make myself more 
economical."
        `}
                </pre>
                <p style={{position:"absolute",bottom:"14%",fontSize:"15px",color:"grey"}}>Father of son</p>
                </div>

             </div>
       </div>






       <div id="seventh">
            <div id="article">
            <p id="tt" style={{fontSize:"44px"}}>Read our popular article </p>
            <pre id="b1" style={{position:"absolute",top:"20%",left:"37%",fontSize:"18px"}}>{`
Discussion or informational website published on the
                                 consisting of discrete.
        `}
                </pre>
            </div>

           
            <div id="card-container">
                <div id="col7">
                    <img src={article1} alt="card1" width={"90%"} height={"250px"} style={{padding:"10px"}}></img> <br/> 
                    <h3 style={{marginLeft:"20px",lineHeight:1.4}}>How a single day-use hotel
booking earned 15,000 points</h3> <br/> <br/>
                    <pre id="b1" style={{position:"absolute",top:"60%",fontSize:"18px",padding:"12px"}}>{`
  As the pandemic lingers, IT job seekers will
                        continue to conten...
        `}
                    </pre>
                </div>

               
               
                <div id="col7">
                    <img src={article2} alt="card1" width={"90%"} height={"250px"} style={{padding:"10px"}}></img> <br/> 
                    <h3 style={{marginLeft:"20px",lineHeight:1.4}}>List of the 20 COVID-19
quarantine hotels in Wayanad</h3> <br/> <br/>
                    <pre id="b1" style={{position:"absolute",top:"60%",fontSize:"18px",padding:"12px"}}>{`
  Here are essential tips that you need to 
    know about so you can have the w...
        `}
                    </pre>
                </div>




                <div id="col7">
                  <div id="sub-article">
                        <div id="sub-cards1">
                        <hr style={{height:"2px",color:"black",borderColor:"black",background:"grey"}}/>
                        <h4 style={{lineHeight:"1.5"}}>Luxury Travel Deals: Why
Now is Your Best Chance</h4>
                        <p style={{position:"absolute",bottom:"16%",fontSize:"15px",color:"grey"}}>31 Mar 2021</p>
                        <img id="articleimg" src={article3} alt="article3"></img>
                       
                        </div>
                      
                        
                        <div id="sub-cards2">
                        <hr style={{height:"2px",color:"black",borderColor:"black",background:"grey"}}/>
                        <h4 style={{lineHeight:"1.5"}}>A survival guide to finding
work in a pandemic</h4>
                        <p style={{position:"absolute",bottom:"16%",fontSize:"15px",color:"grey"}}>03 Apr 2021</p>
                        <img id="articleimg" src={article4} alt="article3"></img>
                        
                         </div>
                        
                       

                        <div id="sub-cards3">
                        <hr style={{height:"2px",color:"black",borderColor:"black",background:"grey"}}/>
                        <h4 style={{lineHeight:"1.5"}}>Why Melbourne is top dog
for pet friendly places</h4>
                        <p style={{position:"absolute",bottom:"16%",fontSize:"15px",color:"grey"}}>07 Apr 2021</p>
                        <img id="articleimg" src={article5} alt="article3"></img>
                        
                        </div>
                        <hr style={{height:"2px",color:"black",borderColor:"black",background:"grey"}}/>
                        
                       
                  </div>
                  
                </div>

              
             </div>

        </div>  



        <div id="eighth">
            <p id="tt2" style={{fontSize:"44px"}}>Do you want to rent out the hotel ? </p>
            
            <pre id="b1" style={{left:"15%",top:"25%"}}>{`
We prepare the best choice of places with high quality
that is guaranteed by the hotel assessment agency.
        `}
                </pre>
                <br/>
                <br/>
                <button id="book">Rent now !</button>
                <img src={book} alt="book" width={"400px"} height={"300px"} style={{position:"absolute",right:"10%"}}></img>
        
        </div> 
            </div>
        </><hr /><Footer /></>
    

      
    )
    }

   

export default Home;