import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AmberpetHeader.css"
import { faEnvelope, faLocation, faLocationPin, faLocationPinLock, faMapLocation } from "@fortawesome/free-solid-svg-icons";

function Amberpetheader(){
    return<div>
        <div id="pedda-header-Container">
            <section class="pedda">
                <div class="pedda-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>

                </div>


                <div class="pedda-email"><span class="htxt"><FontAwesomeIcon icon={faEnvelope}/>  info@primelandindia.com</span><span class="htxt"> <FontAwesomeIcon icon={faLocationPin}/>  Pedda Amberpet, NH 65, Hyderabad, Telangana 501511 </span></div>
                <div class="pedda-logo">
                    <img id="peddaimg" src="https://primelandindia.com/pedda-amberpet/images/primeland-logo.png"/>
                </div>

            </section>

            <section class="pedda2">

                <div id="Pedda-img">
                    <img id="priamland" src="https://primelandindia.com/pedda-amberpet/images/pedda-amberpet.png"/>

                </div>

                <div id="pedda-tabs">
                    <span class="pedda-t" style={{color:"darkGreen"}}>Home</span>
                    <span class="pedda-t">Overview</span>
                    <span class="pedda-t">Project Highlights</span>
                    <span class="pedda-t">Layout</span>
                    <span class="pedda-t">Location </span>
                    <span class="pedda-t">Contact Us</span>
                </div>

            </section>
            

        </div>

    </div>
}
export default Amberpetheader;