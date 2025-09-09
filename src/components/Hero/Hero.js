import React from 'react';
import './Hero.scss';
import { Carousel } from "react-bootstrap";
import hero1 from './img/hero1.jpg';
import hero2 from './img/hero2.jpeg';
import hero3 from './img/hero3.jpg';
import hero4 from './img/hero4.jpeg';
import hero5 from './img/hero5.jpeg';
import hero6 from './img/food-program.jpeg';
import hero7 from './img/pmc-outreach.jpg';
import hero8 from './img/hero8.jpeg';
import hero9 from './img/hero9.jpeg';
import hero10 from './img/hero10.jpeg';

function Hero() {
    return(
        <>
        <Carousel fade className='container'>
        <Carousel.Item className="hero">
                <img src={hero9} alt="conference-slide" />
                <Carousel.Caption className="hero-content">
                    <h3>Conference Meeting</h3>
                    <p> 
                        All Uganda Martyrs Macalder Catholic Parish Conference Meeting 2025
                    </p>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero10} alt="orphans-slide" />
                <Carousel.Caption className="hero-content">
                    <h3>Homelessness and Shelter Repair</h3>
                    <p> 
                        We are committed to addressing the issue of homelessness and ensuring safe living conditions for those in need.
                    </p>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero1} alt="orphans-slide" />
                <Carousel.Caption className="hero-content">
                    <h3>Elderly Companion</h3>
                    <p> 
                    We are dedicated to enriching the lives of seniors through warm, respectful, and reliable companionship services.
                    </p>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero2} alt="orphans-slide"/>
                <Carousel.Caption className="hero-content">
                    <h3>Laying of the foundation ceremony</h3>
                    <p>The day of making commitment to achieve our organizational mission.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero3} alt="orphans-slide" />
                <Carousel.Caption className="hero-content">
                    <h3>Orphans Support for a Brighter Future</h3>
                    <p> 
                        we are dedicated to providing comprehensive care and support for orphans and vulnerable children.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero4} alt="orphans-slide" />
                <Carousel.Caption className="hero-content">
                    <h3>Poor women striving at the Mines for their livelihoods</h3>
                    <p>
                      At our CBO, we are passionate about empowering women and championing 
                      their socio-economical rights especially the poor heads of the households. 
                      We believe that when women are empowered, entire communities thrive.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="hero">
                <img src={hero5} alt="elderly-care" />
                <Carousel.Caption className="hero-content">
                    <h3>Elderly Care and Nutrition Support</h3>
                    <p>
                    Our CBO is committed to providing essential care and nutrition support to the elderly and those in need. 
                    We believe that every individual deserves access to nutritious meals and compassionate care.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="hero">
                <img src={hero6} alt="food-program" />
                <Carousel.Caption className="hero-content">
                    <h3>Feeding the Elderly Hungry</h3>
                    <p>Our CBO is committed to the wellness of the poor elderly</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="hero">
                <img src={hero7} alt="food-program" />
                <Carousel.Caption className="hero-content">
                    <h3>Children Outreach</h3>
                    <p>Young Vincentians of Macalder Showing their Love and Compassion to the elderly poor</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="hero">
                <img src={hero8} alt="love-compassion" />
                <Carousel.Caption className="hero-content">
                    <h3>Love and Compassion</h3>
                    <p>Vincentian member showing care, love and compassion to an elderly sick woman.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
 }

 export default Hero;