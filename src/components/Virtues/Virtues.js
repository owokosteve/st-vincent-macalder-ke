import React from "react";
import './Virtues.scss';

function Virtues() {
    return (
        <>
            <section className="virtues-section">
                <div className="container">
                    <h2 className="section-heading">Our Virtues</h2>
                    <div className="virtues-list">
                        <div className="virtue">
                            <h3 className="virtue-title">Simplicity</h3>
                            <p className="virtue-description">Embracing simplicity in our actions and interactions, we strive for clarity and focus in all that we do.</p>
                        </div>
                        <div className="virtue">
                            <h3 className="virtue-title">Humility</h3>
                            <p className="virtue-description">We approach our work with humility, recognizing that true strength lies in acknowledging our limitations and learning from others.</p>
                        </div>
                        <div className="virtue">
                            <h3 className="virtue-title">Selflessness</h3>
                            <p className="virtue-description">Putting the needs of others before our own, we selflessly dedicate ourselves to serving those who are less fortunate.</p>
                        </div>
                        <div className="virtue">
                            <h3 className="virtue-title">Generosity</h3>
                            <p className="virtue-description">With open hearts and minds, we embrace the spirit of generosity, sharing our resources and compassion to make a positive impact.</p>
                        </div>
                        <div className="virtue">
                            <h3 className="virtue-title">Zeal</h3>
                            <p className="virtue-description">Driven by passion and enthusiasm, we approach our mission with unwavering zeal, empowering others and inspiring change.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Virtues;