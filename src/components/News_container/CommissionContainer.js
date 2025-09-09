import React from "react";
import "./NewsContainer.scss";
import article2 from "./imgs/commission1.jpeg";
import article3 from "./imgs/commision_ceremony.jpeg";

function CommissionContainer() {
    return (
        <>
            <section className="full-news-section">
                <div className="full-news-container container mt-5">
                    <div className="full-article">
                        <h3 className="article-title">
                            MACALDER VINCENTIANS COMMISSIONING CEREMONY
                        </h3>
                        <div className="row">
                        <div className="article-imag col">
                            <figure>
                                <img src={article3} width={500} alt="A group cutting cake in a ceremony" />
                                <figcaption>
                                    Members of the Macalder Vincentian team taking oath of service to the poor.
                                </figcaption>
                            </figure>
                        </div>
                        <div className="airticle-imag col">
                            <figure>
                                <img src={article2} width={500} alt="Cake cutting session during the ceremony" />
                                <figcaption>
                                    Cake cutting moment afer the Holly Mass during the commission ceremony.
                                </figcaption>
                            </figure>
                        </div>
                        </div>
                        <div className="full-article-content">
                            <p className="full-article-description">
                                On 5th of June 2022 on the feast of Pentecost, three years since
                                the inception of the organization, the Macalder Vincentian
                                community team, joined together in taking their commitment to
                                the Vincentian spirituality of service to the poor. Based on the
                                organizational rule of law and in compliance to the Vincentians
                                spirituality, a group of ten persons (7-women and 3-men) of good
                                will, faithfully and tirelessly demonstrated a relentless effort
                                in service to the poor and therefore a decision for a rite of
                                commitment/commissioning had been reached.
                            </p>
                            <p>
                                Based on the society’s rule of law and in compliance to the 
                                Vincentians spirituality, these are persons who have been of 
                                good faith and possess a willing spirit and have also worked 
                                tirelessly demonstrating relentless efforts in service to the 
                                poor selflessly. They have continued the Christ’s Mission of 
                                evangelizing the poor and the suffering through teaching, 
                                touching & transforming lives, therefore on behalf of the president 
                                and the Society of St. Vincent De Paul Kenya, Homa-Bay Area Council, 
                                Macalder Parish, they deserved a rite of commitment renewal.
                            </p>
                            <p>
                                The team joined by both the Vincentian Youth and the Vincentian 
                                Pontifical missionary childhood (PMC) were filled with zeal and 
                                spirit of humility. 
                            </p>
                            <p>
                                The occasion was graced by the SSVP-Kenya National President Madam 
                                Acquanetta Ayodi including other national officials and dignitaries. 
                                The Holy Mass presided over by Rev. Fr. Father Felix Ochieng the 
                                Parish Priest All Uganda Martyrs Macalder Catholic Parish under the 
                                Catholic Diocese of Homa-Bay, Kenya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommissionContainer;