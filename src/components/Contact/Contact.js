import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Email from '../../images/AboutPage/Email-img.2647c4eb.bin';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar />

            <div className="container contactForm-area pt-5 my-5">
                <div className="row mt-4">
                    <div className="col-md-6 ">
                        <img className="img-fluid" src={Email} alt=""/>
                    </div>

                    <div className="col-md-6">
                        <form className="contact-form">
                            <div className="d-flex mb-3">
                                <input type="text" className="form-control me-1" name="name" placeholder="Name*" />
                                <input type="email" className="form-control ms-1" name="email" placeholder="Email*" />
                            </div>
                            <input type="text" className="form-control mb-3" name="subject" placeholder="Subject*" />
                            <textarea className="form-control mb-3" name="message" placeholder="Message*" cols="30" rows="5"></textarea>
                            <input type="submit" value="Send Message" className="btn custom-btn" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;