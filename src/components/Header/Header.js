import React from "react";
import './Header.scss';
import logo from '../../logo.png';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsTwitter, BsYoutube, } from 'react-icons/bs'


function Header() {
    return (
        <>
            <header>
                <section id="top-nav">
                    <Nav className="container">
                        <Nav.Link href="tel:+254723215331"><BsFillTelephoneFill className="icon" /> &nbsp;(+254) 723 215 331 </Nav.Link>
                        <Nav.Link href="mailto:info@stvincentmacaldercharitydev.org"><BsFillEnvelopeFill className="icon" /> &nbsp; info@stvincentmacaldercharitydev.org</Nav.Link>
                        <Nav.Link href="https://web.facebook.com/profile.php?id=100092703249445" target="_blank"><BsFacebook className="icon" /> &nbsp; <span className="d-md-none">Facebook</span> </Nav.Link>
                        <Nav.Link href="https://twitter.com" target="_blank"><BsTwitter className="icon" /> &nbsp;<span className="d-md-none">Twitter</span></Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UC3CfXLDdd7XzZi8TKPnzh8A" target="_blank"><BsYoutube className="icon" /> &nbsp;<span className="d-md-none">Youtube</span></Nav.Link>
                    </Nav>
                </section>
                <section id="mid-nav">
                    <div>
                        <a className="logo" href="/">
                        <img src={logo} alt="St. Vincent logo." width={150} />
                        </a>
                    </div>
                    <div>
                        <a className="mx-5 p-2 proposal" href="/SVM-2023 Project proposal.pdf" download>
                            Download SVM Project Proposal
                        </a>
                        <Link to="/donate">
                            <button className="donate-btn btn btn-secondary">Donate</button>
                        </Link>
                    </div>
                </section>
                <section id="main-nav">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav mx-auto">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    <Link className="nav-link" to="/about">About Us</Link>
                                    <Link className="nav-link" to="/activities">Activities</Link>
                                    <Link className="nav-link" to="/whom_we_serve">Whom We Serve</Link>
                                    <Link className="nav-link" to="/problem_statement">Problem Statement</Link>
                                    <Link className="nav-link" to="/systemic_approach">Systemic Approach</Link>
                                    <Link className="nav-link" to="/proposed_projects">Proposed Projects</Link>
                                    <Link className="nav-link" to="/our_team">Our Team</Link>
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header;