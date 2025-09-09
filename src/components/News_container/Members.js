import React from "react";
import "./NewsContainer.scss";
import article1 from "./imgs/renewal.jpeg";
import article2 from "./imgs/renewal2.jpeg";
import article3 from "./imgs/cutting-cake.jpeg";

function Members() {
  return (
    <>
      <section className="full-news-section">
        <div className="full-news-container container mt-5">
          <div className="full-article">
            <h3 className="article-title text-center">
              RENEWAL OF COMMITMENT CEREMONY AND COMMISSIONING OF NEW MEMBERS: Date: October 1, 2023
            </h3>
            <div className="article-imag row">
              <div className="col">
                <figure>
                  <img
                    src={article2}
                    width={500}
                    alt="Group of Vincentian posing"
                  />
                  <figcaption>
                      Members of St. Vincent Macalder during the renewal ceremony.
                  </figcaption>
                </figure>
              </div>
              <div className="col">
                <figure>
                  <img
                    src={article1}
                    width={500}
                    alt="Group of Vincentian posing"
                  />
                  <figcaption>
                      Members of St. Vincent Macalder during the renewal ceremony.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="article-image">
                <figure>
                  <img
                    src={article3}
                    width={500}
                    alt="Group of Vincentian posing"
                  />
                  <figcaption>
                      Members of St. Vincent Macalder cake cutting moment
                  </figcaption>
                </figure>
              </div>
            <div className="full-article-content">
              <p className="article-description">
                On the 1st of October 2023 at the All Uganda Martyrs Macalder
                Catholic Parish, the Vincentian fraternity of Macalder rejoiced
                by welcoming 6 new members while 8 other members renewed their
                commitment. Alongside the adult Vincentians, the Vincentian
                Pontifical Missionary Children-PMC are always part of our
                celebrations for they are the next church.
              </p>
              <p>
                Based on the society’s rule of law and in compliance to the
                Vincentians spirituality, these are persons who have been of
                good faith and possess a willing spirit and have also worked
                tirelessly demonstrating relentless efforts in service to the
                poor selflessly. They have continued the Christ’s Mission of
                evangelizing the poor and the suffering through teaching,
                touching & transforming lives, therefore on behalf of the
                president and the Society of St. Vincent De Paul Kenya, Homa-Bay
                Area Council, Macalder Parish, they deserved a rite of
                commitment renewal.
              </p>
              <div className="article-imag">
            </div>
              <p>The occasioned was celebrated symbolically;</p>
              <ol>
                <li>
                  To mark the feast of St. Vincent De Paul which was precedent
                  to a celebration on the 27th September 2023 an annual event of
                  Vincentian worldwide and as indicated in the Catholic Church
                  calendar of saints.
                </li>
                <li>
                  The month of October is the month of the Holy Rosary,
                  therefore asking for the blessings from the Holy Mary Mother
                  of God the patroness of our Vincentian spirituality.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Members;
