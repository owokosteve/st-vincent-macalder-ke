import React from "react";
import "./News.scss";
import article1 from "./imgs/stigma.jpg";
import article2 from "./imgs/commission1.jpeg";
import article3 from "./imgs/ssvp-assembly.jpeg";
import article4 from "./imgs/renewal.jpeg";
import article5 from "./imgs/foundation1.jpeg"
import aggregation from "./imgs/aggregation.jpeg";
import { Link } from "react-router-dom";

function News() {
  return (
    <>
      <section className="news-section">
      <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={article4} width={400} alt="SVVP Assembly Meeting" />
            </div>
            <div className="article-content">
              <h3>
                RENEWAL OF COMMITMENT CEREMONY AND COMMISSIONING OF NEW MEMBERS-{" "}
                <span>June 2022</span>{" "}
              </h3>
              <p className="article-description">
                On the 1st of October 2023 at the All Uganda Martyrs Macalder 
                Catholic Parish, the Vincentian fraternity of Macalder rejoiced 
                by welcoming 6 new members while 8 other members renewed their 
                commitment. Alongside the adult Vincentians, the Vincentian 
                Pontifical Missionary Children-PMC are always part of our 
                celebrations for they are the next church.
              </p>
              <p>
                Based on the society’s rule of law and in compliance to the Vincentians 
                spirituality, these are persons who have been of good faith and possess 
                a willing spirit and have also worked tirelessly demonstrating...
              </p>
              <Link to="/article5">Continue reading</Link>
            </div>
          </div>
        </div>
        <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={aggregation} width={400} alt="SVVP Assembly Meeting" />
            </div>
            <div className="article-content">
              <h3>
                THE AGGREGATION OF THE ALL UGANDA MARTYRS MACALDER PARISH
                CONFERENCE-{" "}
                <span>June 2022</span>{" "}
              </h3>
              <p className="article-description">
                The council general international of the society of St. Vincent
                De Paul international periodic Board meeting on the 3rd June of
                2023, reached a decision to aggregate the All Uganda Martyrs
                Macalder Catholic conference with a certification on
                international recognition following the outstanding performance
                in service delivery to the needy persons.
              </p>
              <p>
                {" "}
                The above certification has granted the organization a privilege
                to;
              </p>
              <ol>
                <li>
                  International recognition on charity work based on the
                  Vincentian spirituality.
                </li>
                <li>
                  International twinning and partnership on community based
                  economically sustainable projects enabling an enhanced service
                  delivery to the poor and the suffering.
                </li>
                <li>
                  Privilege to sit at the SSVP-Kenya National Board meeting.
                </li>
                <li>
                  Authority to networking and linkages cross-sectorally in order
                  to help the poor.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={article5} width={400} alt="SVVP Assembly Meeting" />
            </div>
            <div className="article-content">
              <h3>
                THE LAYING OF THE FOUNDATION CEREMONY - <span>Jan 8 2023</span>{" "}
              </h3>
              <p className="article-description">
                On the 8TH January the year 2023 the Vincentian community of
                Macalder took the initiative to celebrate following a job well
                done since the inception of the organization. A foundation was
                laid and Holy mass celebrated at the Macalder parish ground and
                presided over by Rev. Fr. Felix the parish priest and his curate
                Rev. Fr. Isaac Oyugi of All Uganda Martyrs Macalder Catholic
                Parish in Homa-Bay Diocese. The ceremony marked with pomp and
                color included the catholic faithfuls of the Parish, and the
                Vincentian Pontifical Missionary Children-PMC of Macalder
                Parish. The team planted a total of 7 seedlings of the same
                species known as Gravellier symbolizing the seven holy founders
                of the society of St. Vincent De Paul and as part of the global
                greening.
              </p>
              <Link to="/article4">Continue reading</Link>
            </div>
          </div>
        </div>
        <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={article3} width={400} alt="SVVP Assembly Meeting" />
            </div>
            <div className="article-content">
              <h3>
                SSVP- KENYA ALL AFRICAN ASSEMBLY- AAA -{" "}
                <span>July 21 2022</span>{" "}
              </h3>
              <p className="article-description">
                The society of St. Vincent de Paul, council general
                international (CGI), the President General (PG) called for a
                convention aimed at bringing together all the 52 African
                SSVP-National presidents, the Africa continent Vincentian
                leadership the 3 day conference was held at DIMESSE SISTERS
                RETREAT CENTER in Nairobi Kenya on the 19th July-21st July 2022
                focused on the objective of the assembly was to improve the
                Vincentian service delivery to the poor mostly in African third
                world countries.
              </p>
              <p>
                The Vincentian community of Macalder (includes the Vincentian
                Pontifical Missionary Childhood of Macalder, the Vincentian
                Youth and the Adults) were invited to share and contribute
                during the assembly and discuss on how to better the Vincentian
                mission statement. The Vincentians of Macalder presented a gift
                to the SSVP-President General, Mr. Renato Lima De O’liveira.
              </p>
              <Link to="/article2">Continue reading</Link>
            </div>
          </div>
        </div>
        <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={article2} width={350} alt="HIV stigma" />
            </div>
            <div className="article-content">
              <h3>
                MACALDER VINCENTIANS COMMISSIONING CEREMONY -{" "}
                <span>June 5 2022</span>{" "}
              </h3>
              <p className="article-description">
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
                poor selflessly. They...
              </p>
              <Link to="/article3">Continue reading</Link>
            </div>
          </div>
        </div>
        <div className="news-container">
          <div className="article">
            <div className="article-image">
              <img src={article1} width={350} alt="HIV stigma" />
            </div>
            <div className="article-content">
              <h3>
                Mrs Margaret Otieno Otieno - Head of Our Community Health
                Management Programs
              </h3>
              <h4 className="article-title">
                Woman who changed the HIV stigma narrative in Nyatike
              </h4>
              <p className="article-description">
                Living in a remote village of Osiri in Macalder, Nyatike
                Sub-county, the 67-year-old mother of four tells how she
                ventured into primary healthcare in 1985, after working as a
                traditional birth attendant for more than 15 years. Ms Otieno
                says the peak of HIV infection in the late 1990s, a disease
                which most locals misconstrued as witchcraft, saw most miners
                were get infected and with little knowledge on the disease. In
                2002, she started offering home-based care to those infected
                with HIV. She is passionate about her venture and does her work
                with zeal. For 35 years, Margaret Otieno has been an embodiment
                of resilience. Living in a remote village of Osiri in Macalder,
                Nyatike Sub-county, the 67-year-old mother of four tells The
                Voice she ventured into primary healthcare in 1985, after
                working as a traditional birth attendant for more than 15 years.
              </p>
              <p>
                “I got married at the age of 17 upon completing my primary
                education, Two years into marriage, I started working as a
                traditional midwife. I then sought employment as a casual
                labourer at Macalder Dispensary in Nyatike Sub-county, some four
                kilometres from my home,” she says when we catch up with her at
                St Camillus Mission Hospital where she is nursing her ailing
                husband. With the introduction of primary healthcare services in
                1985, Ms Otieno, then working in the gold rich region, got fully
                submerged in community service, focusing on minor disease
                prevention, distribution of essential drugs and providing
                antenatal care to expectant mothers.
              </p>
              <Link to="/news_and_articles">Continue reading</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
