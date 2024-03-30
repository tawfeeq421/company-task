import "./Companyintro.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


function Intro(){
    return<div id="container-intro">
        <div id="about">
            <b>THE PRIMELAND MARK</b>
            <p>We work with a purpose and the purpose is to create value for everyone.</p>
        </div>

        <div id="logo-text">
            <section id="company-logo">
                <img  class="logo" src="https://primelandindia.com/img/home-about-logo.png"/>

            </section>

            <section id="about-text">
                <p>At Primeland, we focus on developing positive, smarter and sustainable communities to elevate the lifestyles for everyone. We believe that every customer would like to be surrounded by the finer things in life, every property we develop has been prudently considered, thoughtfully planned, methodically designed and robustly built with a seasoned buyer in mind.</p>
                <p>Our commitment to our customers has been at the core of what we do and have always placed a premium on a collaborative and a “win-win” relationship’s.</p>

                <button id="about-btn">About us <FontAwesomeIcon icon={faArrowRight}/></button>

                <div id="review">
                    <div class="R1">
                        <b>INDUSTRY EXPERIENCE</b>
                        <h3>25+</h3>

                    </div>
                    <div class="R2">
                        <b>ACRES CRAFTED</b>
                        <h3>2K+</h3>
                    </div>
                    <div class="R3">
                    <b>HAPPY CUSTOMERS</b>
                    <h3>10K+</h3>
                    </div>
                    

                </div>

            </section>

        </div>

    </div>
}
export default Intro;