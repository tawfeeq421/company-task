import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header()
{
    const [isVisible,setDropDwn]=useState(false);

    const[isVisible2,setDropDwn2]=useState(false)
    const navigateTo=useNavigate();

    return<div>
    <div id="header">
        <section id="container">
            <img src="https://primelandindia.com/img/primeland-logo.png"/>

            <ul class="u1">
                <li>
                <span class="icon"><FontAwesomeIcon icon={faGlobe}/></span>

                <div id="text">
                   <h3>My Home Hub</h3><br/>
                   <p>Hitech City, Hyderabad</p>
                </div>


                </li>
           

            </ul>

            <ul class="u2">
                <li>
                    <span class="icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                    <h3 class="h">info@primelandindia.com</h3>
                    
                </li>
            </ul>

            <div class="u3">
                <span class="links">
                    <img class="media" src="https://img.icons8.com/?size=512&id=118960&format=png"/>    
                </span>
                <span class="links">
                    <img class="media" src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png"/>   
                </span>
                <span class="links"> 
                    <img class="media" src="https://img.icons8.com/?size=512&id=19318&format=png"/>    
                </span>
                <span class="links">
                    <img class="media" src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"/>     
                </span>
                <span class="links">
                    <img class="media" src="https://img.icons8.com/?size=512&id=60469&format=png"/>     
                </span>
            </div>
            
            

        </section>

    </div>

    <section id="container-2">
        <span class="tab">HOME</span>
        <span class="tab">ABOUT US</span>
        <span class="tab"  onMouseOver={()=>setDropDwn(true)}  >PROJECTS</span>
        <div class="menu-items"  style={{display:isVisible?'block':'none'}} >
            <div class="menu-item"  onMouseOver={()=>setDropDwn2(true)} >Ongoing Projects <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                                                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                                                                          </svg></div>
            <div class="menu-item">Completed Projects</div>
        </div>
        <div class="menu-items2"  style={{display:isVisible2?'block':'none'}} onMouseOut={()=>setDropDwn(false) }>
            <div class="menu-item" onClick={()=>navigateTo('/pedda-amberpet')} onMouseOut={()=>setDropDwn2(false)}>Pedda-Amberpet</div>
            <div class="menu-item">Reserve</div>
            <div class="menu-item">Iconia</div>
            <div class="menu-item">The One</div>
        </div>








        <span class="tab">PARTNER WITH US</span>
        <span class="tab">GALLERY</span>
        <span class="tab">CAREERS</span>
        <span class="tab">KNOWLEDGE HUB</span>
        <span class="tab">CONTACT</span>
        <button id="btn">Enquire Now!<FontAwesomeIcon icon={faArrowRight}/></button>
        
        

    </section>
    
    </div>
}
export default Header;