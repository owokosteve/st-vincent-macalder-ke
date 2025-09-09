import React from "react";
import './Activities.scss';
import homevisits from './imgs/homevisits.jpg';
import girl_education from './imgs/girl-education.jpg';
import elderlyImage from './imgs/feeding2.jpg';
import homelessnessImage from './imgs/homelessness.jpg';
import orphansImage from './imgs/orphans-support.jpg';
import medicalImage from './imgs/medica-assistance.jpg';
import greeningImage from './imgs/global-greening.jpg';
import disabledImage from './imgs/disability.jpg';
import youthsImage from './imgs/youths.jpg';

function Activities() {
    return (
        <>
            <div className="intro-section">
                <h2 className="intro-heading mt-5 py-3">Our Impactful Activities</h2>
                <p className="intro-description">
                    At our CBO, we are dedicated to making a positive difference in the lives of individuals and communities. Through our wide range of impactful activities, we strive to address critical needs, uplift the underprivileged, and create a better future for all. Each activity is driven by our passion for service, compassion, and a strong belief in the transformative power of collective action. Explore our diverse activities below and join us in making a lasting impact on the lives of those in need.
                </p>
            </div>
            <div className="activities-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Home Visits</h2>
                                <p className="activity-description">
                                    We believe in the power of personal connections and providing care right at the doorstep. Our dedicated team conducts regular home visits to ensure the well-being of individuals and families in need. Through these visits, we offer support, companionship, and essential resources to make a positive impact in their lives.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={homevisits} alt="Home Visits" width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={girl_education} alt="Promoting Girl Child Education" width={400} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Promoting Girl Child Education</h2>
                                <p className="activity-description">
                                    We are passionate about empowering young girls through education.
                                    Our programs focus on providing access to quality education, scholarships,
                                    and mentorship opportunities. By promoting girl child education,
                                    we aim to break barriers, empower future leaders, and create a more equitable society.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Elderly Care and Support</h2>
                                <p className="activity-description">
                                    We provide comprehensive care and support to the elderly, recognizing their unique needs and contributions to our society. Our dedicated team offers material assistance, including essential supplies, to help improve their daily lives. Additionally, we facilitate linkages to medical attention, ensuring they receive the necessary healthcare services and support. We prioritize their well-being and work towards creating a nurturing environment where they feel valued, respected, and cared for.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={elderlyImage} alt="Elderly Care and Support" width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={homelessnessImage} alt="Homelessness and Shelter Repair" width={500} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Homelessness and Shelter Repair</h2>
                                <p className="activity-description">
                                    We are committed to addressing the issue of homelessness and ensuring safe
                                    living conditions for those in need. Our organization provides assistance to
                                    individuals experiencing homelessness, offering them shelter, essential supplies,
                                    and support to help them regain stability. Additionally, we focus on shelter repair
                                    initiatives, renovating and improving existing shelters to create safe and dignified
                                    living spaces. Our goal is to empower individuals and families by providing them with
                                    the necessary resources and a sense of security to rebuild their lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Orphans and Vulnerable Children Care and Support</h2>
                                <p className="activity-description">
                                    We are dedicated to providing care and support to orphans and vulnerable children, ensuring their well-being and brighter futures. Our organization offers a nurturing environment, access to education, healthcare, and psychosocial support. We strive to empower these children by providing them with the necessary resources, mentorship, and opportunities to break the cycle of poverty and adversity. Through our comprehensive programs, we aim to give them the love, care, and support they need to thrive and reach their full potential.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={orphansImage} alt="Orphans and Vulnerable Children Care and Support" width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={medicalImage} alt="Medical Support Linkages" width={500} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Medical Support Linkages</h2>
                                <p className="activity-description">
                                    Our organization is dedicated to ensuring access to medical assistance for those in need. We facilitate linkages to medical services, connecting individuals with healthcare professionals, clinics, and hospitals. We understand the importance of timely and quality healthcare, and our team works diligently to ensure that individuals receive the necessary medical attention and support they require. Through these linkages, we strive to improve health outcomes, enhance well-being, and empower individuals to lead healthier lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img className="activity-image" src={greeningImage} alt="Global Greening and Environmental Conservation" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Global Greening and Environmental Conservation</h2>
                                <p className="activity-description">
                                    We are committed to protecting our planet and creating a sustainable future. Our organization actively engages in global greening initiatives, environmental conservation efforts, and the preservation and restoration of natural habitats. Through community engagement, awareness campaigns, and hands-on conservation projects, we strive to raise environmental consciousness, promote eco-friendly practices, and safeguard our ecosystems. Together, we can make a positive impact on our planet and ensure a greener, healthier world for generations to come.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading">Supporting Disabled Persons with Basic Needs</h2>
                                <p className="activity-description">
                                    Our organization is dedicated to providing support and assistance to 
                                    disabled persons, recognizing their unique challenges and needs. 
                                    We strive to enhance their quality of life by ensuring access to basic 
                                    needs such as food, clothing, and shelter. Our compassionate team works 
                                    closely with disabled individuals, providing them with the necessary 
                                    resources, adaptive devices, and inclusive opportunities. 
                                    We aim to empower them, promote their rights, and create an inclusive 
                                    society where every individual can thrive and participate fully.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={disabledImage} alt="Supporting Disabled Persons with Basic Needs" width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <img src={youthsImage} alt="Supporting Disabled Persons with Basic Needs" width={500} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-details">
                                <h2 className="activity-heading"> Youth Counselling on Reproductive Health Services And Menstrual Hygiene Management for the Adolescent Girls.</h2>
                                <p className="activity-description">
                                    Youth counseling on career path and spiritual formation is part of our duty and
                                     therefore this grants a step as part of our activities. The youths are the 
                                     future and a lot of emphasis must be applied for their wellbeing, both spiritually, 
                                     mentally, and psychosocially. We also do guidance on community priorities to income 
                                     generating activity start up. Identifying an opportunity is quite key for socio-economic 
                                     development. Menstrual hygiene management is a key factor to consider in the lives of 
                                     adolescents. During periods, adolescent girls are stigmatized, a scenario hindering their 
                                     concentration and performance in class work. A continuous mentorship of the girls on the 
                                     menstrual system is of great importance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activities;