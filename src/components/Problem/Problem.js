import React from "react";
import './Problem.scss';

import poor from './imgs/poor-day.jpg';

function ProblemStatement() {
    return(
        <> 
            <div className="container">
                <h2 className="mt-3 py-2 text-center">Problem Statement</h2>
                <p>
                    Africa is considered a starving and hopeless continent despite its massive resource endowment.
                    Poverty and food insecurity are twin factors that are closely related and are household names in the poor 
                    continent of Africa. According to Lynn (2001), poverty is a major cause of food insecurity. 
                    The world economic status is deteriorated, the global climate is posing more harm than good to the planet earth. 
                    The world catastrophic events are not a tune to dance to, things are never the same like they used to be.
                    A lot of knowledge, wide research and a better understanding is required to counter attack the dangers imposed on the human race today. 
                    The above idea is worth bringing into play to create a more permanent solution to fight poverty and improve food security hence rising living standards in our communities especially among women.
                    The sub-Saharan Africa accounts for half of the global poor (Lebada, 2016). 
                </p>
                <p>
                    Kenya is part of the rising evidence of poverty in sub-Saharan Africa, notwithstanding that the country is on considerable fair economic growth. 
                    Kenya is one of the most unequal countries in the sub-region and this is exemplified by the number of people living below the poverty lines and are deprived.
                    Soon after independence in 1965, The Government of Kenya detailed its commitment to alleviate poverty together with ignorance and disease, and the economy has 
                    since been hit hard by several shocking factors.
                    About half of the population of Nyatike Sub County, in Migori County, Kenya is not able to meet their basic needs 
                    and therefore live in poverty (UNICEF, 2015).
                    <figure>
                        <img src={poor} alt="Wolrd day of the poor" width={400} />
                        <figcaption>
                            2022 World day of the poor statistics
                        </figcaption>
                    </figure>
                    According to UNICEF (2015) 56% of Kenya’s population live below poverty lines and so for the case of Nyatike. 
                    Large segments of the population including the rural poor are vulnerable to climatic, social and economic shocks (Muiruri, 
                    2010), hence, Article 43 (1) (c) of the Constitution of Kenya (2010) outlines that every person has the right to be free 
                    from hunger, and have adequate food of acceptable quality.
                    The main economic activities in Macalder/Nyatike Sub-County, over 70% of the locals obtain their livelihoods from the 
                    small artisanal mining and partially small-scale shallow fishing both at the old colonial Mines of Macalder and Lake 
                    Victoria respectively, 15% are small scale entrepreneurs. 
                    Poverty has been a persistent problem facing Kenya more specifically in the South western Kenya in the sub county of 
                    Nyatike, in Migori County since its independence when poverty, ignorance and disease were identified as the greatest 
                    impediments to national development. The poverty issue in Nyatike Sub County is increasing more in rural areas and urban 
                    slums settlements where almost 70% of the population resides, (KIPPRA 2007). According to the World Policy Institute 
                    report (2013), Kenya’s rapid population growth, declining land productivity and low income have caused many people to 
                    migrate from the rural areas to urban areas in such jobs and other opportunities with women making a significant 
                    proportion of this urban migration (Mokomane 2014). 
                    The manifestations of poverty amongst this group of women are; inadequate access to basic necessities such as education, 
                    safe water and sanitation, employment, health facilities, decent housing, lack of plenty dietary food hence hunger and 
                    starvation. The living conditions of female headed households is more precarious in rural poor and urban slum dwellers.
                </p>
            </div>
            <div className="container problem">
                <p>The community has since been hit hard by several shocking factors among them including;</p>
                <ul>
                    <li>The HIV/AIDS pandemic has caused significant problems in Sub-Saharan Africa, particularly in the Macalder community located in southwestern Kenya, Migori County. Poverty is on the rise as a result of the devastating loss of adult parents and children infected by HIV/AIDS. The economy is imbalanced due to an uncontrollable financial dependency ratio. Orphaned children, vulnerable widows, and widowers are left without hope, lacking access to basic human needs.</li>
                    <li>Women in the area face challenges in accessing financial and economic opportunities, which leads to inequality and slows down development.</li>
                    <li>The global and national economic conditions have caused a high cost of living, particularly in Nyatike. The region's semi-arid climate poses challenges for small-scale farming in the area.</li>
                    <li>The Kenyan Government and development partners have not taken enough initiatives to create income-generating opportunities for disadvantaged women and youth in Macalder, South-Western Kenya.</li>
                    <li>Macalder community, being a semi-arid area, faces challenges with global warming and harsh climatic conditions that hinder agricultural productivity and limit food production.</li>
                    <li>There is a high level of unemployment among young people, especially young women and men, both in the region and throughout Kenya.</li>
                    <li>Irresponsible and unsafe mining conditions in the old colonial mines of Macalder, Nyatike, have resulted in high mortality rates among young men and women, leaving behind vulnerable orphans, widows, and widowers. As a result, there is a high dependency ratio in the community.</li>
                    <li>The Kenyan Government's high tax rates are sanctioning and hindering income-generating activities in the region.</li>
                    <li>Limited access to opportunities for starting and growing micro, small, and medium-sized businesses is a challenge, particularly in the Macalder and Nyatike area.</li>
                    <li>There is a high level of illiteracy among adult men and women in the Macalder community, which hampers their ability to pursue development opportunities. This is especially true for women who were unable to attend school due to cultural norms, leading to increased poverty rates in the region.</li>
                    <li>Negative traditional practices in Africa deprive women of their fundamental rights, freedom, and respect. This includes limited access to asset ownership, partnerships in community development, and economic opportunities for women.</li>
                </ul>
            </div>
        </>
    )
}

export default ProblemStatement;