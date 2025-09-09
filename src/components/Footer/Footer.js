import React from 'react';
import './Footer.scss';
import logo from '../../logo.png';

function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo text-center">
                            <img src={logo} alt="Organization Logo" width={100} />
                            <h3>ST. VINCENT MACALDER</h3>
                        </div>
                        <div className="footer-social">
                            <h4>Follow Us:</h4>
                            <ul>
                                <li><a href="#w"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#w"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#w"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#w"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;