
import "./Companydiscription.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

function Discription()
{
    return<div>
        <div id="Discp-container">
            <section id="discp">
                <div id="img-and-text1">
                    <section class="only-logo">
                        <img src="https://primelandindia.com/img/home-1.png"/>

                    </section>
                    <h4>Why People Choose  Primeland</h4>
                    <p>We work with a purpose and the purpose is to create value for everyone.</p>
                    

                </div>
                

                <div id="img-and-text2">
                    <section class="Passion">
                        <h3>01</h3>
                        <p class="P">Passion</p>
                        <p class="pyara">We are passionate about what we do and we believe that Real Estate Development can change the landscape of the markets and also to the people’s lives. We’re relentlessly focused on growth opportunities to create increased value for everyone.</p>

                    </section>

                    <section class="Commitment">
                    <h3>03</h3>
                        <p class="P">Commitment</p>
                        <p class="pyara">We do what we say and believe in doing the right thing. We are honest about what we think and commit only when we have conviction. We celebrate progress not just results. We believe everything we do has to be of the highest possible standard at all times.</p>

                    </section>

                </div>

                <div id="img-and-text3">
                    <section class="Creation">
                        <h3>02</h3>
                        <p class="P">Value Creation</p>
                        <p class="pyara">We work with a purpose and the purpose is to create value for every stake holder that is associated with us, whether it is a minute detail, a complex design, or a business transaction. We have constantly evolved to the changing markets to promote a positive change.</p>

                    </section>

                    <section class="Sustainability">
                        <h3>04</h3>
                        <p class="P">Sustainability</p>
                        <p class="pyara">What some call difficult, we love doing it. We go beyond property development to creating meaningful and sustainable communities that are built to last. We care for nature and constantly the best practices to significantly reduce the negative impact on the environment. </p>

                    </section>

                </div>
                

            </section>
            <button class="discp-btn">About Us <FontAwesomeIcon icon={faArrowRight}/></button>

        </div>

    </div>
}
export default Discription