import React from "react";
import './Proposal.scss';

import water from './imgs/water.jpg';

function ProposedProjects() {
    return (
        <>
            <div className="container">
                <h2 className=" mt-5 py-3 text-center">Project Proposals</h2>
                <div class="project-cards">
                    <div class="project-card">
                        <h3>Strengthening and empowering poor female-headed households</h3>
                        <p>This project aims to strengthen and empower poor female-headed households through the provision of micro, small, and medium business grants. The grants will support business start-ups and provide financial assistance to boost existing businesses. By empowering these households economically, we can help alleviate poverty and create sustainable livelihoods in the community.</p>
                    </div>

                    <div class="project-card">
                        <h3>Provision of Clean and Safe Water</h3>
                        <p>The lack of clean and safe water is a pressing issue in our community. This project focuses on providing clean and safe water to the residents of Nyatike. We plan to implement water purification systems and establish water distribution points strategically located within the community. By ensuring access to clean water, we aim to improve the health and well-being of thousands of households and reduce the prevalence of waterborne diseases.</p>
                        <figure>
                            <img src={water} alt="water shortage" />
                            <figcaption>
                                Macalder community members queuing for water
                            </figcaption>
                        </figure>
                    </div>

                    <div class="project-card">
                        <h3>Global Greening</h3>
                        <p>Our Global Greening initiative aims to combat climate change and promote environmental sustainability. Through this project, we aim to plant 10,000 trees by the end of 2023. Trees play a crucial role in regulating the climate, improving air quality, and preserving biodiversity. By planting trees, we can contribute to a more sustainable world and demonstrate our commitment to caring for our common home.</p>
                    </div>

                    <div class="project-card">
                        <h3>Elderly Care Home</h3>
                        <p>We recognize the challenges faced by the elderly in our community, particularly those who are sick, hungry, and neglected. This project seeks to establish an elderly care home that provides a safe and nurturing environment for the elderly population. The care home will offer comprehensive support, including proper nutrition, clothing, medical care, and psychosocial support. Our goal is to restore dignity and improve the quality of life for the elderly individuals who have been neglected and marginalized.</p>
                    </div>

                    <div class="project-card">
                        <h3>School Feeding Program Establishment</h3>
                        <p>This project aims to establish a school feeding program to address the issue of hunger among children attending schools in our community. Lack of access to regular meals at home often leads to poor concentration and low attendance rates among students. By providing nutritious meals at schools, we can improve children's health, well-being, and educational outcomes. Through this program, we aspire to break the cycle of hunger and create a conducive learning environment for all children.</p>
                    </div>

                    <div class="project-card">
                        <h3>Dairy Goat Rearing Project</h3>
                        <p>The Dairy Goat Rearing Project focuses on improving nutrition and livelihoods among the elderly in our care. Dairy goats are an excellent source of nutritious milk, which is essential for the well-being of the elderly. This project aims to establish a sustainable dairy goat rearing project that will provide a regular supply of milk for the elderly beneficiaries. Additionally, the project will offer training and support to ensure the proper care and management of the dairy goats, contributing to the economic empowerment of the elderly individuals we serve.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProposedProjects;