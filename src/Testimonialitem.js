 
import "./Testimonialitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"


function Testimonials(){

    return<div id="Item-container">

        <p id="testim">Testimonials</p>
        <h3 id="testim2">Our Customer Words</h3>



        <section id="testimonial-container">

            <div class="client-info">
                <div class="quote-icon"><FontAwesomeIcon icon={faQuoteLeft}/></div>
                <h3 class="name">Anand Mishra</h3>
                <p class="address">Kompally, Hyderabad</p>

                <div class="img-box"><img class="rotedimg" src="https://primelandindia.com/img/testi-1.png"/></div>

                <p class="review">Best real estate company for the investment purpose in approved layouts with fabulous offers from the company.</p>

            </div>


         <div class="client-info">
            <div class="quote-icon"><FontAwesomeIcon icon={faQuoteLeft}/></div>
            <h3 class="name">Srinivas Rao</h3>
            <p class="address">Kondapur,Hyderabad</p>

            <div class="img-box"><img class="rotedimg" src="https://primelandindia.com/img/testi-1.png"/></div>

            <p class="review">I am happy that I purchased a villa with Primeland Group because the quality of materials they used are very great and long lasting.</p>

         </div>

            <div class="client-info">
            <div class="quote-icon"><FontAwesomeIcon icon={faQuoteLeft}/></div>

                <h3 class="name">Pradeep Kumar</h3>
                <p class="address">Indra Nagar,Bangalore</p>
                <div class="img-box"><img class="rotedimg" src="https://primelandindia.com/img/testi-1.png"/></div>


                <p class="review">Really impressed by the customer service team, they are extremely friendly and always helpful for a picky buyer like me.</p>


            </div>

        </section>

    </div>
}
export default Testimonials;