import React from "react";
import './About.scss';
import team from './imgs/team.jpg';
import fred from './imgs/fredrick.jpg';
import vincent from './imgs/st.vincent.jpg';
import vincentians from './imgs/vincentians1.jpg';

function About() {
    return (
        <>
            <div>
                <section className="about">
                    <div className="container">
                    <figure className="vincentians">
                        <img src={vincentians} alt="Vincentiants" className="img-fluid" />
                        <figcaption>
                            Vincentians of Macalder Organization presenting during a past function at the All Uganda Martyrs 
                            Macalder Catholic Parish-Kenya.
                        </figcaption>
                    </figure>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="content">
                                <h2>Who we are</h2>
                                <p>
                                    <strong>The Saint Vincent Macalder Community Based Charity and Development Organization</strong> was
                                    founded on the 13th day of September 2019. We emulate the spirituality and mission of
                                    <strong><em>St. Vincent De Paul</em></strong> and <strong><em>Fredrick O’ Zanam</em></strong>. 
                                    The two are the Catholic Patron Saints of Charity works in the world and founders of the Society St. Vincent De Paul respectively.
                                    They are the role models in our service with hope to the poor and suffering.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <figure>
                                <img src={vincent} alt="St. Vincent De Paul" className="img-fluid vincent mx-3" width={250} />
                                <img src={fred} alt="Fredrick O Zanam" className="img-fluid fred" width={250} />
                                <figcaption id="figcaption">
                                    St. Vincent De Paul and Fredrick O' Zanam
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    </div>
                    <p className="container">
                        We are a <em>faith-based community organization</em> working with and for the poor under 
                        the <strong>Catholic Diocese of Homa Bay</strong> in the <strong>Archdiocese of Kisumu, Kenya</strong>. 
                        Our team consists of 10 dedicated individuals—7 women and 3 men—who are 
                        inspired and empowered by the spirit of charity. Each member possesses 
                        different skills and knowledge in support to our mission.
                        The call started with <strong> Mr. Thomas Abongo</strong>, the President and Co-founder  
                        who was once a candidate for the priesthood with the congregation of the Mission and the Marianists, 
                        the consecrated apostolic communities of men within the Catholic 
                        Church. Mr. Abongo has served in various leadership capacities within the Macalder 
                        Catholic Parish. Throughout his tenure, he prioritized his work in supporting the 
                        poor within the Macalder community and beyond.
                    </p>
                    <figure className="container my-2">
                        <img src={team} alt="Vincentians posing" className="img-fluid" />
                    </figure>
                    <p className="container">
                        These individuals used to contribute from their own pockets to help the poor. Later, with the support of a 
                        second collection from fellow parishioners, we were able to provide food to at least one or two elderly persons 
                        in the community. We found encouragement in the Bible verse Matthew 19:19-22, where Jesus challenged a young 
                        rich man to sell his possessions and give to the poor as a means to secure his place in heaven.
                        Our Spiritual Adviser is <strong>Rev. Fr. Felix Ochieng</strong>who is the Parish Priest of the <strong>All Uganda
                        Martyrs Macalder Catholic Parish</strong>. The organization is commissioned and registered as a non-profit community
                        based charity & Development organization with the Kenyan government Ministry of Social and gender.
                    </p>
                </section>
                <section className="goals">
                    <div class="mission-vision container">
                        <div class="mission">
                            <h2 className="mt-5 py-3 text-center">Mission</h2>
                            <p>
                                Our mission is to teach, touch and positively transform lives in a more 
                                practical manner and to continue with the Christs’ apostolate of evangelizing 
                                the body and the soul, proclaiming the gospel to the poor and the suffering 
                                through promotion and provision of socio-economic & sustainable development 
                                services to the impacted persons in the community.
                            </p>
                        </div>
                        <div class="vision">
                            <h2 className="mt-5 py-3 text-center">Vision</h2>
                            <p>
                                A community of households living a happy life in its fullness far beyond Poverty,
                                with a brotherly spirit of
                                compassion, justice, peace, hope and love to one another.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="objectives">
                    <div className="container">
                        <h2 className="mt-5 py-3 text-center">Our Strategic Objectives</h2>
                        <ul>
                            <li>
                                To improve the living standard of the vulnerable poor households affected and infected by Hiv/Aids PANDEMIC, de jure & de facto through socio-economic empowerment interventions and linkages.
                            </li>
                            <li>
                                To promote education standards especially for the girl child to reasonable heights as a way to fight poverty through linkages and networking.
                            </li>
                            <li>
                                To improve food security by promotion of modern farming techniques and modern farm inputs supply.
                            </li>
                            <li>
                                Global Greening, environmental conservation and preservation.
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="long-term-objectives">
                    <div className="container">
                        <h2 className="mt-5 py-3 text-center">Long Term Objectives/Aims</h2>
                        <ul>
                            <li>Sustainable economic empowerment among poor female-headed households.</li>
                            <li>Putting up a center for the care and support of the elderly (the forgotten lot), sick, and hungry.</li>
                            <li>Improving food security/production by provision of farm inputs.</li>
                            <li>Promoting access to educational services through networking and linkages.</li>
                            <li>Reduce homelessness through shelter, repair, maintenance, or constructing new.</li>
                            <li>Spiritual nourishment among children and the youth, supporting the catechumen trainings.</li>
                            <li>Employment creation.</li>
                            <li>Gender equality.</li>
                            <li>Global climate regulation and community environmental justice (Laudato Si Movement).</li>
                        </ul>
                    </div>
                </section>
                <section id="challenges-section">
                    <div className="container">
                        <h2 className="mt-5 py-3 text-center">The Organization Challenges - YR 2022--2023</h2>
                        <ol>
                            <li>Lack of external funding to facilitate the organization’s charitable activities and sustainable projects.</li>
                            <li>Lack a well-established sustainable project to financially support the organizational projects.</li>
                            <li>Lack of organizational partnership to join hands in achieving our goals.</li>
                            <li>Lack of stretched linkages and networking to support our work.</li>
                            <li>The Nyatike region is remote and vast with difficulty in transport and communication, especially during the rainy season when some places get submerged with floods.</li>
                            <li>The overwhelming number of visiting beneficiaries who are in dire need of our services/attention.</li>
                            <li>The rise of global and Kenyan national high cost of living, hence poverty in the rise.</li>
                            <li>Harsh global climatic conditions which are non-favoring and unbalanced to current agricultural practices.</li>
                        </ol>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About;