import React from "react";
import './Team.scss';
import thomas from './imgs/team/thomas.jpg';
import john from './imgs/team/john.jpg';
import florence from './imgs/team/florence.jpg';
import elizabeth from './imgs/team/elizabeth.jpg';
import margaret from './imgs/team/margaret.jpg';
import benta from './imgs/team/benta.jpg';
import charles from './imgs/team/charles.jpg';
import rael from './imgs/team/rael.jpg';
import applolline from './imgs/team/appoline.jpg';
import syprose from './imgs/team/syprose.jpg';
import millicent from './imgs/team/millicent.jpeg';
import felix from './imgs/BOARD/board1.png';
import leocadia from './imgs/BOARD/board2.jpg';
import jackson from './imgs/BOARD/board3.jpg';
import pasqualina from './imgs/BOARD/pasqualina.jpeg';
import gabriel from './imgs/BOARD/gabriel.jpeg';
import { Link } from "react-router-dom";

function OurTeam() {
    return (
        <> 
            <section>
                <div className="team-section">
                    <h2 className="section-heading">Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={thomas} alt="Member 1" className="member-image" />
                            <h3 className="member-name">Mr. Thomas Abongo</h3>
                            <p className="member-title">Co-Founder & President</p>
                            <Link className="mail">thomas@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Mr. Abongo is a long time experienced church leader who has served at the catholic
                                parish for All Uganda Martyrs Macalder in several capacities, as parish pastoral
                                council Vice chairperson and as secretary for the parish finance and development
                                team from 2016 With a passion for social change, he leads the team towards achieving
                                our mission of making a difference in the community...<Link to="/thomas_abongo">continue reading</Link>
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={john} alt="Mr. John Aketch" className="member-image" />
                            <h3 className="member-name">Mr. John Aketch</h3>
                            <p className="member-title">Secretary</p>
                            <Link className="mail">aketch@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Mr. Aketch is a TSC-Registered Kenya secondary school teacher by profession with
                                over 15 years experience in adolescent mentorship, He has serviced the organization
                                as the secretary since its inception -2019.  A very active member of the organization
                                who is ready to give his all in order to achieve the organizational goal.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={florence} alt="Florence Kaserah" className="member-image" />
                            <h3 className="member-name">Madam Florence Kaserah</h3>
                            <p className="member-title">Treasurer</p>
                            <Link className="mail">florence@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Madam Florence is a highly  honest, accountable leader of  the organization 
                                who has shown her financial management skills and knowledge with a lot of 
                                transparency in management of the organization resources. She has followed 
                                the footsteps of her mum who served the parish as the treasurer for over 25 years...
                                <Link to="/florence_kaserah">continue reading</Link>
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={elizabeth} alt="Elizabeth Onyango" className="member-image" />
                            <h3 className="member-name">Madam Elizabeth Onyango</h3>
                            <p className="member-title">Vice President</p>
                            <p className="member-description">
                                Elizabeth is a committed leader ready to offer the  necessary efforts in order for the organization to score. A TSC-Registered Primary school teacher by profession with over 20 years  working experience in 6 different schools as a headteacher.
                                She is significantly responsible for Girl child education and modeling. Vice chairlady Catholic Women's Association-CWA Macalder Catholic Parish.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={margaret} alt="Margaret Otieno" className="member-image" />
                            <h3 className="member-name">Mama Margaret Otieno</h3>
                            <p className="member-title">Community Health Worker</p>
                            <p className="member-description">
                                Mama Margret is a long time community health worker who is highly competent with over 35-years of community services to the households negatively impacted by HIV/AIDS. She has earned an award following her outstanding performance in HIV/AIDS COUNSELING, PREVENTION and CONTROL in Macalder Nyatike region.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={benta} alt="Benta Atieno" className="member-image" />
                            <h3 className="member-name">Mrs Benta Atieno</h3>
                            <p className="member-title">Aggregation Officer</p>
                            <p className="member-description">
                                Benta is a committed community mobilizer in matters of community income generating activities. She is one the co-founder of Jamii Bora Trust and Kenya ltd, a brain child of the Stromme Foundation. She has worked as a street children rescuer, rehabilitator with more than 50 street children among them, abandoned, orphaned destitute children and the women. She is a member and a social worker with the young widow’s organization in Nairobi Kenya.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={charles} alt="Charles Odhiambo" className="member-image" />
                            <h3 className="member-name">Mr. Charles Odhiambo</h3>
                            <p className="member-title">Vice Secretary</p>
                            <p className="member-description">
                                Mr. Charles is a hardworking person with a passion for helping the poor. He is a staunch member of the church and the secretary also for the St. Joseph small christian community. He is a qualified electrical wiring engineer, a skill relevant for the service to our beloved beneficiaries, he helps to provide light to households of our masters (the poor).
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={rael} alt="Ms. Rael" className="member-image" />
                            <h3 className="member-name">Ms. Rael</h3>
                            <p className="member-title">Twinning Officer</p>
                            <Link className="mail">rael@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Rael is in charge of any external communication in support of our mission. She is a qualified private and public entities accountant with a noble experience of 7 years in Kenyan National constituency development fund working as an account assistant.
                                She is a member of the organizing secretary of the Catholic Women Association of the Macalder Catholic Parish.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={applolline} alt="Appolline Awuor" className="member-image" />
                            <h3 className="member-name">Ms. Appolline Awuor</h3>
                            <p className="member-title">Prayer Leader</p>
                            <p className="member-description">
                                Ms. Appoline is a generous, selfless and humble member of the team, a hard working lady committed to excellence. She stands in for matters of liturgy, organizes our spiritual events, i.e. ministerial sacraments to the elderly, sick and the disabled.
                                Appoline is a staunch member of the Catholic Legion of Mary Group, a member of St. Alloys Choir under Macalder Parish.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={syprose} alt="Syprose Awino" className="member-image" />
                            <h3 className="member-name">Madam Syprose Awino</h3>
                            <p className="member-title">Mentor</p>
                            <p className="member-description">
                                Madam Syprose is a hardworking, humble and generous lady who is ready to give her all to our charity work.
                                She is a member of the Catholic Women Association-CWA of Macalder Parish. Syprose is a TSC-Registered professional primary school teacher with over 5 years work experience.
                                She is talented in girl child mentorship with specifications to their menstrual management.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={jackson} alt="Jackson Wasonga" className="member-image" />
                            <h3 className="member-name">Mr. Jackson Wasonga</h3>
                            <p className="member-title">Project Officer</p>
                            <Link className="mail">jackson@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Mr. Jack is a hardworking and honest man who is committed to
                                excellence. He is a game changer in making things work out better,
                                he is an energetic man with adorable humor.
                                Jack is TSC-Registered primary school teacher with over 1o years’
                                experience in child and adolescent mentorship.
                                We have confidence in Jacks’ skills and talent in managing the
                                organization's projects.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={millicent} alt="Millicent Adhiambo" className="member-image" />
                            <h3 className="member-name">Ms. Millicent Adhiambo</h3>
                            <p className="member-title">Youth Mentor</p>
                            <Link className="mail">milly@stvincentmacaldercharitydev.org</Link> 
                            <p className="member-description">
                                Ms. Millicent is the organization’s youth mentor with formal training and 
                                knowledge on youth mentorship and general counselling.
                                She is a member of the St. Mourice Macalder Catholic youth Group in 
                                Macalder Parish. Millicent also works at the Macalder Sub-County referral 
                                hospital as a community health worker. Millicent is an organized, honest, 
                                simple and humble leader. We have confidence in her ability and talent in 
                                training the youths in several courses especially in reproductive health 
                                services, income generating activity and social life protection matters. 
                                She also represent the organization in external meetings concerning the 
                                youths both in and out of Macalder, Nyatike in Migori County. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="team-section">
                    <h2 className="section-heading">Our Board Members</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={felix} alt="Fr. Felix" className="member-image" />
                            <h3 className="member-name">Rev Fr. Felix Ochieng</h3>
                            <p className="member-title">Board Chairperson</p>
                            <p className="member-description">
                                Rev Fr. Felix is the current priest in charge of our Parish
                                who has also served in several parishes under the Diocese of
                                Homa-Bay, a diocesan priest who is a generous, simple,
                                selfless leader devoted to the spiritual wellbeing of his flock.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={leocadia} alt="Leocadia Joseph" className="member-image" />
                            <h3 className="member-name">Sister Leocadia Joseph</h3>
                            <p className="member-title">Board member/Internal Auditor</p>
                            <p className="member-description">
                                Sister Leo is a member of the consecrated community of Sisters of Charity
                                of Immaculate Conception-SCIC of Ivrea Sisters, she has served as
                                the mother superior at Macalder Parish Ivrea sisters and in other
                                parishes where the Ivrea Sisters has a mission.
                                She is of great significance in matters of contributions to the needy
                                during our home visits, her love for the poor is unstoppable.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={gabriel} alt="Gabriel Titus Otieno" className="member-image" />
                            <h3 className="member-name">Rev. Fr. Gabriel Titus Otieno</h3>
                            <p className="member-title">Board member</p>
                            <p className="member-description">
                                Rev Fr. Gabriel is a diocesan local priest in the Catholic Diocese of Homa-Bay. 
                                He is currently working in St. Mary’s Uriri Catholic Parish under the Diocese of Homa-Bay. 
                                He is a member of the Council of Priest in the diocese. He has served in 5 Parishes including 
                                All Uganda Martyrs Macalder parish as a priest in charge. Rev. Fr. Gabriel is a charitable person 
                                with priority to excellence in support to the poor. We have confidence in his leadership as a 
                                board member with outstanding skills of leadership and resource management and infrastructural 
                                development.
                            </p>
                        </div>
                        <div className="team-member">
                            <img src={pasqualina} alt="Paqualina Henry" className="member-image" />
                            <h3 className="member-name">Sister Pasqualina Anthony</h3>
                            <p className="member-title">Board member</p>
                            <p className="member-description">
                                Sister Pasqualina is a consecrated member of the Sitters of Charity of 
                                Immaculate Conception of Ivrea. She been of support to us in matters of 
                                spiritual engagements. With over 20 years in service to the needy, 
                                Sister Pasqualina has just celebrated her Silver Jubilee in December 2022. 
                                She has served in one of the communities in the southern Italy in an 
                                elderly homecare for the last 7 years before her transfer to Veyula 
                                Dodoma-Tanzania, Mother house in the early 2022.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam;