import React from "react";
import {Route, Routes } from 'react-router-dom';

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Activities from "./pages/Activities/Activities";
import Contact from "./pages/Contact/Contact";
import WhomWeServe from "./components/Whom_we_serve/Whom";
import ProblemStatement from "./components/Problem/Problem";
import SystemicApproach from "./components/Approach/Approach";
import ProposedProjects from "./components/Proposals/Proposal";
import Gallery from "./components/Gallery/Gallery";
import OurTeam from "./components/Team/Team";
import Donation from "./components/Donation/Donation";
import NewsContainer from "./components/News_container/NewsContainer";
import CommissionContainer from "./components/News_container/CommissionContainer";
import Foundation from "./components/News_container/Foundation";
import ThomasDetails from "./components/Team/ThomasDetails/ThomasDetails";
import FlorenceDetails from "./components/Team/FlorenceDetails/FlorenceDetails";
import AfricanAssembly from "./components/News_container/AfricanAssembly";
import Members from "./components/News_container/Members";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
            <Route path="/whom_we_serve" element={<WhomWeServe />} />
            <Route path="/problem_statement" element={<ProblemStatement />} />
            <Route path="/systemic_approach" element={<SystemicApproach />} />
            <Route path="/proposed_projects" element={<ProposedProjects />} />
            <Route path="/our_team" element={<OurTeam />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/news_and_articles" element={<NewsContainer />} />
            <Route path="/article5" element={<Members />} />
            <Route path="/article4" element={<Foundation />} />
            <Route path="/article3" element={<CommissionContainer />} />
            <Route path="/article2" element={<AfricanAssembly />} />
            <Route path="/thomas_abongo" element={<ThomasDetails />} />
            <Route path="/florence_kaserah" element={<FlorenceDetails />} /> 
        </Routes>
    )
}

export default AppRoutes;