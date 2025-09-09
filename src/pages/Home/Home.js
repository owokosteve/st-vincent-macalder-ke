import React from "react";
import './Home.css';
import Hero from "../../components/Hero/Hero";
// import activity1Image from '../../pages/Activities/imgs/girl-education.jpg';
// import activity2Image from '../../pages/Activities/imgs/elderly-care.jpg';
// import activity3Image from '../../pages/Activities/imgs/homelessness.jpg';
import Virtues from "../../components/Virtues/Virtues";
import { Link } from "react-router-dom";
import News from "../../components/News/News";
import Map from "../../map";

function Home() {
    return (
        <>
            <Hero /> 
            <div>
                <section>
                    <div className="container">
                        <h2 className="mt-5 py-3">About Us</h2>
                        <p>
                            We are the Vincentians of Macalder, a community based charity organization, working
                            with and for the poor, enriched by the spirituality of Saint Vincent De Paul a Catholic
                            Church renowned St. and Patron of all charities, remain steadfast in our service to the
                            poor, our work is broader though with limited resources to accomplish our goals. We are
                            focused in our work of relieving people who are poor, sick, burdened, suffering and
                            traumatized due to one reason or another. We are mainly focused on improving the lives of the poor with priority to the female
                            headed household’s socio-economic sustainable empowerment with regard to
                            education, household economic strengthening, food and nutrition, feminine health and
                            gender equality, pastoral care and psychosocial counseling.
                        </p>
                        <Link to="/about">
                            <button id="link-btn" className="btn btn-secondary">Learn more</button>
                        </Link>
                    </div>
                </section>
                <Virtues />
                <section id="scripture-section">
                    <div>
                        <h2>Organization Spiritual Reflection</h2>
                        <p>Mathew 19:19-23 : The Rich and the Kingdom of God </p>
                        <ol>
                            <li><span class="verse-number">16.</span> Just then a man came up to Jesus and asked, “Teacher, what good thing must I do to get eternal life?</li>
                            <li><span class="verse-number">17.</span> “Why do you ask me about what is good?” Jesus replied. “There is only One who is good. If you want to enter life, keep the commandments.”</li>
                            <li><span class="verse-number">18.</span> “Which ones?” he inquired. Jesus replied, “‘You shall not murder, you shall not commit adultery, you shall not steal, you shall not give false testimony,</li>
                            <li><span class="verse-number">19.</span> honor your father and mother,’[a] and ‘love your neighbor as yourself.’[b]”</li>
                            <li><span class="verse-number">20.</span> “All these I have kept,” the young man said. “What do I still lack?”</li>
                            <li><span class="verse-number">21.</span> Jesus answered, “If you want to be perfect, go, sell your possessions and give to the poor, and you will have treasure in heaven. Then come, follow me.</li>
                        </ol>
                    </div>
                </section>
                <section>
                    <h2 className="mt-5 py-3 text-center">Our Core Values</h2>
                    <div class="values my-5">
                        <span class="word">commitment</span>
                        <span class="word">compassion</span>
                        <span class="word">respect</span>
                        <span class="word">integrity</span>
                        <span class="word">empathy</span>
                        <span class="word">advocacy</span>
                        <span class="word">courage</span>
                        <span class="word">stewardship</span>
                    </div>
                </section>
                <section id="where_we_work">
                    <div className="container">
                        <h2 className="mt-5 py-3 text-center">Where We Work</h2>
                        <p>
                            Nyatike Sub County is located to the south western Kenya and borders Tanzania 
                            to the north east and Uganda to the east, it is situated to the eastern shores of 
                            Lake Victoria. The sub county has a total population of 176,153, <strong>92,162 FEMALE, 
                            83,989 MALE</strong>. Over 70% of the population across the gender lives below the 
                            poverty line. We are situated at the Macalder Catholic Parish headquarters, 
                            our services extends to the seven Wards in Nyatike sub-county, Macalder/Kanyarwanda, North Kadem, 
                            Kachieng,Kanyasa, Kaler, Got Kachola, and Muhuru, stretching along the great 
                            Lake Victoria in Nyatike Sub-County, Migori County- Kenya.

                        </p>
                    </div>
                </section>
                {/* <section id="map-section">
                    <div className="location">
                        <h2 className="mt-5 py-3 text-center">Discover St. Vincent Macalder: Map & Directions</h2>
                        <iframe title="Location for St. Vincent Macalder" width="800" height="300" frameborder="0" src="https://www.bing.com/maps/embed?h=300&w=800&cp=-0.9686150152876483~34.296268896995606&lvl=12.01&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                        </iframe>
                        <div className="maps">
                            <a id="largeMapLink" target="_blank" rel="noreferrer" href="https://www.bing.com/maps?cp=-0.9686150152876483~34.296268896995606&amp;sty=r&amp;lvl=12.01&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                            <a id="dirMapLink" target="_blank" rel="noreferrer" href="https://www.bing.com/maps/directions?cp=-0.9686150152876483~34.296268896995606&amp;sty=r&amp;lvl=12.01&amp;rtp=~pos.-0.9782399959937322_34.354346380961836____&amp;FORM=MBEDLD">Get Directions</a>
                        </div>
                    </div>
                </section> */}
                <section id="map-section">
                    <div id="map-container">
                        <Map />
                    </div>
                </section>
                <section>
                    <h2 className="my-3 py-3 text-center">News & Articles</h2>
                    <News />
                </section>
            </div>
        </>
    )
}

export default Home;