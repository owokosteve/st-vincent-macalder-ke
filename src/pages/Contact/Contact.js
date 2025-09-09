import React from "react";
import './Contact.scss';
import { useForm } from "@formspree/react";


function Contact() { 
    const [state, handleSubmit] = useForm("mjvdqbee");
    if (state.succeeded) {
        return <p>Thanks, we'll get back to you soon!</p>
    }
    return (
        <>
            <div className="contact-section container">
                <h2 className="section-heading">Contact Us</h2>
                <div className="contact-intro">
                    <p>Feel free to reach out to us using the form below. We would love to hear from you and answer any questions you may have.</p>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="btn-submit" disabled={state.submitting}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;