import React from "react";
import "./NewsContainer.scss";
import article1 from "./imgs/stigma (copy).jpg"

function NewsContainer() {
    return (
        <>
            <section className="full-news-section">
                <div className="full-news-container container mt-5">
                    <div className="full-article">
                        <div className="article-image">
                            <img src={article1} width={350} alt="HIV stigma" />
                        </div>
                        <div className="full-article-content">
                            <h3 className="article-title">
                                Woman who changed the HIV stigma narrative in Nyatike
                            </h3>
                            <p className="full-article-description">
                                Living in a remote village of Osiri in Macalder, Nyatike Sub-county,
                                the 67-year-old mother of four tells how she ventured into primary healthcare
                                in 1985, after working as a traditional birth attendant for more than 15 years.
                                Ms Otieno says the peak of HIV infection in the late 1990s, a disease which most locals
                                misconstrued as witchcraft, saw most miners were get infected and with little knowledge on the disease.
                                In 2002, she started offering home-based care to those infected with HIV.
                                She is passionate about her venture and does her work with zeal. For 35 years,
                                Margaret Otieno has been an embodiment of resilience. Living in a remote village
                                of Osiri in Macalder, Nyatike Sub-county, the 67-year-old mother of four tells
                                The Voice she ventured into primary healthcare in 1985, after working as a
                                traditional birth attendant for more than 15 years.
                            </p>
                            <p>
                                “I got married at the age of 17 upon completing my primary education,
                                Two years into marriage, I started working as a traditional midwife.
                                I then sought employment as a casual labourer at Macalder Dispensary in
                                Nyatike Sub-county, some four kilometres from my home,” she says when we
                                catch up with her at St Camillus Mission Hospital where she is nursing her
                                ailing husband.
                                With the introduction of primary healthcare services in 1985, Ms Otieno,
                                then working in the gold rich region, got fully submerged in community service,
                                focusing on minor disease prevention, distribution of essential drugs and providing
                                antenatal care to expectant mothers.
                            </p>
                            <p>
                                “I was passionate about the service and working closely with nurses, I gained requisite knowledge in handling patients. 
                                More often, I advised expectant mothers on the importance of attending pre-natal and post-natal clinic,” she says.
                                “As a community health volunteer, I ensured I handled my work passionately even without pay. I have gained a lot of 
                                experience in handling patients and even prescribing drugs in far flung areas.”
                                Then came the peak of HIV infection in the late 1990s, a disease which most locals misconstrued as 
                                witchcraft. According to Ms Otieno, most miners were getting infected and with little knowledge 
                                on the disease. “Most of those infected resorted to traditional means owing to little knowledge on 
                                the disease, which they blamed on witchcraft. It was challenging convincing 
                                them to undergo HIV testing,” she asserts.
                            </p>
                            <p>
                                Her persistence later paid out as patients started trickling into her home for counselling.
                                “In 2002, I started offering home-based care to those infected with HIV; some were bed ridden. Most of those infected avoided treatment and screening for the disease was an ardent task; samples could be ferried to Homa Bay, some 80 kilometres from the former Migori District,” she recalls.
                                Young miners
                                “I undertook training on adherence counselling, which I’ve been disseminating to patients and the majority have since understood the importance of adherence. Owing to my experience, I can tell the symptoms and signs of an infected person through mere observation.”
                                As a result of the misconception held by locals, many young miners died from the infection.
                                Joram Owino, a gold miner at Osiri Village says Ms Otieno was ‘God sent’ at a time HIV/Aids was ravaging miners in the region, noting that some of those infected had grown so weak and at the verge of dying, but her counsel rejuvenated them.
                            </p>
                            <p>
                                Mr Owino notes that despite offering voluntary services, Ms Otieno’s efforts had changed the locals’ perception on issues surrounding the virus.
                                Gold miners
                                “She went out of her way, offering counselling services to locals at gold mines, making gold miners understand the realities around it. This helped in reducing infections in the area,” Mr Owino asserts.
                                According to Ms Otieno, the government should consider giving a token of appreciation to community health volunteers (CHVs) who play an integral part in the health department.
                                She says that despite playing a core value in the community, most of CHVs are yet to be recognised by the Ministry of Health.
                                “CHVs should be considered for payment, however, little. They offer essential services that sometimes go unnoticed,” she says.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsContainer;