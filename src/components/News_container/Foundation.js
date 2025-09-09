import React from "react";
import "./NewsContainer.scss";
import article1 from "./imgs/foundation1.jpeg";
import article2 from "./imgs/foundation2.jpeg";


function Foundation() {
    return (
        <>
            <section className="full-news-section">
                <div className="full-news-container container mt-5">
                    <div className="full-article">
                        <h3 className="article-title">
                            THE LAYING OF THE FOUNDATION CEREMONY
                        </h3>
                        <div className="article-image row">
                            <div className="col">
                            <figure>
                                <img src={article1} width={500} alt="Group of Vincentian posing" />
                                <figcaption>
                                    Vicentians of Macalder posing for a photo during the ceremony.
                                </figcaption>
                            </figure>
                            </div>
                            <div className="col">
                            <figure>
                                <img src={article2} width={500} alt="Group of Vincentian cutting cake" />
                                <figcaption>
                                    Vicentians of Macalder cutting cake during the ceremony.
                                </figcaption>
                            </figure>
                            </div>
                        </div>
                        <div className="full-article-content">
                            <p className="article-description">
                                On the 8TH January the year 2023 the Vincentian community of Macalder took 
                                the initiative to celebrate following a job well done since the inception 
                                of the organization. A foundation was laid and Holy mass celebrated at the 
                                Macalder parish ground and presided over by Rev. Fr. Felix the parish priest 
                                and his curate Rev. Fr. Isaac Oyugi of All Uganda Martyrs Macalder Catholic 
                                Parish in Homa-Bay Diocese. The ceremony marked with pomp and color included 
                                the catholic faithfuls of the Parish, and the Vincentian Pontifical Missionary 
                                Children-PMC of Macalder Parish. The team planted a total of 7 seedlings of the 
                                same species known as Gravellier symbolizing the seven holy founders of the 
                                society of St. Vincent De Paul and as part of the global greening.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Foundation;