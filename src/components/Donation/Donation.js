import React from "react";
import './Donation.css';
import mpesa from './imgs/lipa-na-mpesa-macalder.png';
// import wiretransfer from './imgs/wire-transfer.png';

function Donation() {
    return(
        <>
            <section>
                <div className="container">
                    <h2 className="mt-2 py-3 text-center">Humble Appeal</h2>
                    <p>
                        St. Vincent Macalder Community Based Charity and development Organization 
                        is delighted to get in touch and appeal to the organizations whose mission 
                        is to fight poverty and improve food security for a grant funding or partnership, 
                        please do join us in the fight against severe poverty in Macalder Community, 
                        Nyatike.
                    </p>
                    <p>
                        Based on the above summary and our narration on poverty in Macalder, Nyatike, 
                        we therefore take this golden opportunity to appeal for any 
                        support/connections/linkages/partnership/net workings be it material /financial 
                        with any organization to enable us fulfill the mission of positively changing the 
                        lives of the people in dire need. We shall appreciate any effort to a positive 
                        consideration towards our appeal and endeavor to work together for the common 
                        good of the poor without any form of discrimination whatsoever.
                    </p>
                    <p>
                        Thank you so much for taking your generous time going through our website as 
                        we anticipate for a positive feedback towards our appeal and hope to connect soon.
                    </p>
                </div>
            </section>
            <section>
                <div className="container payment my-2 py-3 row">
                    <div className="col">
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="GW2ZRJPPFF9US" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_KE/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                    <div className="col">
                        <img alt="lipa na mpesa banner" src={mpesa} width={250} />
                    </div>
                    <div className="col">
                        <h4>GIVE THROUGH BANK</h4>
                        <p><strong>ACCOUNT NAME: </strong>ST VINCENT DE PAUL MACALDER CBO <br />
                         <strong>ACCOUNT NUMBER: </strong>01100174150001<br />
                         <strong>SWIFT CODE: </strong>KCOOKENA<br />
                         <strong>BANK CODE: </strong>11000<br />
                         <strong>COUNTRY: </strong>KENYA<br />
                         <strong>DISTRICT: </strong>MIGORI</p>
                        <hr />
                    </div>
                </div>
                <p className="mx-3">Once the transfer is complete, please send us an email with your full names and donation amount to <strong><em>info@stvincentmacaldercharitydev.org.</em></strong>
                    This will enable us track our donation and we'll also send you a special personalized thank you message. God Bless You!</p>
            </section>
        </>
    )
}

export default Donation;