import React from "react";
import './ThomasDetails.scss';

import thomas from '../imgs/team/thomas.jpg';

function ThomasDetails() {
    return (
        <>
            <div className="container">
                <figure>
                    <img src={thomas} alt="Thomas Abongo" width={500} />
                    <figcaption className="text-start">Mr. Thomas Abongo, Co-Founder and President</figcaption>
                </figure>
                <div>
                    <p>
                        Mr. Abongo is a long time experienced church leader who has served at the catholic
                        parish for All Uganda Martyrs Macalder in several capacities, as parish pastoral
                        council Vice chairperson and as secretary for the parish finance and development
                        team from 2016 With a passion for social change, he leads the team towards achieving
                        our mission of making a difference in the community.
                    </p>
                    <p>
                        Mr. Abongo is currently the chair to the St. Annuarite small christian community in Macalder catholic church.
                        He is qualified in the bellow fields;
                        A community project monitoring and evaluation, an accountant, a youth reproductive health
                        service provider, a sustainable socio-economic resource manager, Micro small & medium microfinancing
                        for the urban slum dwellers and rural poor, a senior savings & loaning officer,
                        Delinquency management, value chain development, with Jamii Bora Kenya ltd and a branch
                        Manager at Rafode ltd microfinance institutions in Kenya, He has also worked with Blue Cross
                        Nyatike Dev. Prog as a MEAL Assistant from 2016.
                        Mr. Abongo has also served 6 years from 2016 as the Chairman St. Gabriels’ Primary school in
                        Macalder Nyatike Sub County.
                        Mr. Abongo has also served with HAKI MADINI KENYA interreligious team, an initiative of the
                        KCCB-Kenya Conference of the Catholic Bishops Justice and peace commission for responsible &
                        sustainable mining and environmental justice under Homa –Bay Diocese. His experience in
                        service to the poor especially the elderly, orphaned and vulnerable children, the poor female
                        heads of the households is extraordinary, an inspiration from his childhood background history.
                        Mr. Abongo is a simple, selfless, generous, humble and compassionate leader who is ready to
                        listen to fellow team members and willingly supports our charity work.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ThomasDetails;