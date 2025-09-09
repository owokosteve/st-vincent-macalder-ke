import React from "react";
import "./FlorenceDetails.scss";

import florence from '../imgs/team/florence.jpg';

function FlorenceDetails() {
    return (
        <>
            <div className="container">
                <figure>
                    <img src={florence} alt="Florence Kaserah" width={500} /> 
                    <figcaption className="text-start">Madam Florence Kaserah, Organization Treasurer</figcaption>
                </figure>
                <div>
                    <p>
                        Madam Florence is a highly  honest, accountable leader of  the organization 
                        who has shown her financial management skills and knowledge with a lot of 
                        transparency in management of the organization resources. She has followed 
                        the footsteps of her mum who served the parish as the treasurer for over 25 years. 
                        Florence has worked as a caretaker at the Mama Antonia Baby Home for 15 years. 
                        She is significant in matters to do with orphans and vulnerable child care within 
                        the organization. A hardworking lady and responsible in organization policy 
                        formulation, analysis and implementation
                    </p>
                    <p>
                        She is highly knowledgeable in Basic Bookkeeping and Accounting. 
                        Florence is highly talented in tailoring and dressmaking. 
                        She supports our girls who cannot continue further with their education 
                        or are through with their studies to acquire the skills for self employment. 
                        Florence is a simple, selfless, transparent, honest and caring leader who 
                        contributes willingly towards our charity work.
                    </p>
                    <p>
                        She is also the Pontifical missionary children-(PMC) animator 
                        representing Macalder Parish in the Catholic diocese of Homa-Bay,  
                        a long time member of the Catholic Women Association, Chair of St. Anuarite small 
                        christian community since 2010.  The responsible in matters of event hosting for 
                        the organization.A committed lady focused on achieving the best between the 
                        hardlines.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FlorenceDetails;