import React from "react";
import './Whom.scss';

import abandoned from './imgs/abandoned.jpg';
import mental from './imgs/mental.jpg';
import orphaned from './imgs/Orphans.jpeg';
import chronic from './imgs/chronically-ill.jpeg';
import elderly from './imgs/elderly.jpeg';
import female_heads from './imgs/female-heads.jpeg';

function WhomWeServe() {
    return (
        <>
            <div className="container whom-we-serve p-5">
                <h2 className="text-center">Whom We Serve</h2>
                <ol>
                    <li><strong>The orphaned and vulnerable children.</strong></li>
                    <p>
                        Those children who live not under the care of their blood parents due to death of either the parents or all, total or partial orphan.
                        The most at-risk group among young people due to different factors depending on humanitarian aid.
                        Young people aged 15-24 contribute 13% of the total number of HIV infections in Macalder, Nyatike, 
                        although the burden of the epidemic continues to vary from time to time down the graph following the 
                        efforts in place by the Kenya government and other civil bodies.
                    </p>
                    <figure>
                            <img src={orphaned} alt="Opharned Children" width={300} />
                            <figcaption className="text-start">Orphans receiving clothes donation.</figcaption>
                    </figure>
                    <li><strong>Poor female/heads of the households (de jure &amp; de facto) negatively impacted by Hiv/Aids.</strong></li>
                    <p>
                        Household in which an adult female is the sole or main income producer and decision-maker due to either of the following factors;
                        <em>De jure;</em> a scenario where the woman lives alone following a legal separation between herself and the husband or by death.  
                        <em>De facto;</em> a scenario where the woman is separated by the husband due to a factor not by the law, the husband lives away from the wife by a circumstance, escapism, alcoholic or otherwise.
                    </p>
                    <p>
                        Commonly women have assumed the responsibility of providing for their families, 
                        almost 90% of the women population has turned to be the household heads and living 
                        below the poverty line, (de facto & de jure), surely women are bound to feed their 
                        families despite the tough economic times. We appreciate the fact that women are a 
                        stake in the growth of the National and international economy.  
                        The pride of a woman is to let their families get satisfied.
                    </p>
                    <figure>
                            <img src={female_heads} alt="Poor Female Heads" width={300} />
                            <figcaption className="text-start">Poor women working in the mine fields.</figcaption>
                    </figure>
                    <li><strong>The elderly poor.</strong></li>
                    <p>
                        Persons who are over 50 years of age and are living in dire need of the basic ones, 
                        i.e. food, clothings, medical attention linkages, shelter repair and construction 
                        of homelessness and psychosocial-counselling.
                        They represent about 3.8% of the total population in Macalder, Nyatike. 
                        There are slightly more men than women. About 68% percent of older people 
                        are between the age of 50 and 75.
                        The old-age dependency ratio is the ratio of the number of elderly people at 
                        an age when they are generally economically inactive is higher compared to the 
                        number of people of working age.
                    </p>
                    <figure>
                            <img src={elderly} alt="The Elderly Poor" width={300} />
                            <figcaption className="text-start"></figcaption>
                    </figure>
                    <li><strong>The abandoned.</strong></li>
                    <p>
                        The persons who are never attended to, they attract no attention from anyone and are completely forgotten. 
                        The above persons are exposed to suffering and deficient in their needs.
                    </p>
                    <figure>
                            <img src={abandoned} alt="Abandoned child" width={300} />
                            <figcaption className="text-start">Abandoned child</figcaption>
                    </figure>
                    <li><strong>People living with disabilities.</strong></li>
                    <p>
                        Persons who have a physical or mental impairment that substantially limits 
                        them or more major life activities, a person who has a history or record of 
                        such an impairment, or a person who is perceived by others as having such an 
                        impairment. About 1% of the population in Macalder in Nyatike are disabled, 
                        1% of the population are the elderly.
                    </p>
                    <figure>
                            <img src={mental} alt="Mental healt" width={300} />
                            <figcaption className="text-start">Two members of St. Vincent Macalder showing love and compassion to a mentally ill woman</figcaption>
                        </figure>
                    <li><strong>The chronically ill.</strong></li>
                    <p>
                        Conditions that last 1 year or more and require ongoing medical 
                        attention or limit activities of daily living or both. Chronic diseases 
                        such as heart disease, cancer, and diabetes are the leading causes of death and disability in South Western Kenya. 100% of the elderly in Macalder, Nyatike are chronically ill and require immediate medical and nutritional attention to save their lives.
                    </p>
                    <figure>
                            <img src={chronic} alt="Chronically Ill" width={300} />
                            <figcaption className="text-start">Vincentians visiting a chronically ill</figcaption>
                    </figure>
                    <li><strong>The Vulnerable youth especially the adolescent girls.</strong></li>
                    <p>
                        The most at-risk group of young people living below 24 years. 
                        About 13.5% of the population in Macalder, Nyatike, Kenya are unemployed 
                        and are completely living below the poverty line and require our attention.
                    </p>
                    <li><strong>The small scale farmers who have neither the financial ability nor the skill to cope up with the modern farming techniques.</strong></li>
                    <p>
                        Macalder Nyatike is a semi-arid climatic condition, crops can never do better given the hostile climatic condition, unless an intervention is put in place. The farming techniques must be imposed in order for an improved yield.
                        The small scale farmers must be equipped with modern techniques and means of farming.
                        The entire population of Macalder, Nyatike is a hungry lot and immediate attention must prevail to rescue the situation.
                    </p>
                </ol>
            </div>

        </>
    )
}

export default WhomWeServe;






