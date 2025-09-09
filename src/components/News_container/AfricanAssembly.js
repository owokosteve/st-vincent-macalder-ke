import React from "react";
import "./NewsContainer.scss";
import article3 from "./imgs/ssvp-assembly.jpeg";


function AfricanAssembly() {
    return (
        <>
            <section className="full-news-section">
                <div className="full-news-container container mt-5">
                    <div className="full-article">
                        <h3 className="article-title">
                            SSVP- KENYA ALL AFRICAN ASSEMBLY- AAA
                        </h3>
                        <div className="article-imag">
                            <figure>
                                <img src={article3} width={800} alt="A group cutting cake in a ceremony" />
                                <figcaption>
                                    Members of St. Vincent Macalder during the SSVP All African Assembly, Nairobi.
                                </figcaption>
                            </figure>
                        </div>
                        <div className="full-article-content">
                            <p className="article-description">
                                The society of St. Vincent de Paul, council general international (CGI), 
                                the President General (PG) called for a convention aimed at bringing 
                                together all the 52 African SSVP-National presidents, the Africa continent 
                                Vincentian leadership the 3 day conference was held at DIMESSE SISTERS 
                                RETREAT CENTER in Nairobi Kenya on the 19th July-21st July 2022 focused 
                                on the objective of the assembly was to improve the Vincentian service 
                                delivery to the poor mostly in African third world countries.
                            </p>
                            <p>
                                The Vincentian community of Macalder (includes the Vincentian Pontifical 
                                Missionary Childhood of Macalder, the Vincentian Youth and the Adults) were 
                                invited to share and contribute during the assembly and discuss on how to 
                                better the Vincentian mission statement. The Vincentians of Macalder presented 
                                a gift to the SSVP-President General, Mr. Renato Lima De O’liveira.
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

export default AfricanAssembly;