import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Footerarea.css"

function Footer()
{
    return<div id="footer-container">
        <section id="footer-info-container">

            <div class="footer-text">
                <div id="footer-img">
                    <img class="footer-logo" src="https://primelandindia.com/img/primeland-footer-logo.png"/>

                </div>

                <h3 class="U-text">Corporate Office :</h3>
                <p id="office-location">My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity Hyderabad, Telangana 500033.</p>

                <h3 class="U-text">Bangalore Office:</h3>
                <p id="office-location">40/1A, 1st floor, Basappa Complex, Lavelle Road, behind Rotary Club, Bengaluru, Karnataka 560001</p>

                <h3 class="U-mail">Email</h3>
                <p id="office-location">info@primelandindia.com</p>
            </div>

            
            <div class="footer-text-2">
                <h3 class="footer-title">Quick Links</h3>

                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Our Story</p>
                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Partner With Us</p>
                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Gallery</p>
                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  NRI</p>
                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  EMI Calculator</p>
                <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Contact Us</p>
            </div>


         <div class="footer-text-3">
            <h3 class="footer-title">Projects</h3>

           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Pedda Amberpet</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Reserve</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Iconia</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  The One</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Greenfield at Kommireddypally</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Greenfield Nandipet</p>
           <p class="services-links"> <FontAwesomeIcon icon={faPlus}/>  Greenfield Forever</p>
        </div>


            <div class="footer-text-4">
            <h3 class="footer-title">Video Intro</h3>

            <video width="250" controls>
                
             <source src="https://primelandindia.com/img/the-one.mp4" type="video/mp4"></source>
            
            </video>
            </div>
            

        </section>

    </div>
}
export default Footer;