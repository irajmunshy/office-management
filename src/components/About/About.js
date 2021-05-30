import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <div>
            <Navbar />

            <div>
                <div className="about-main">
                    <img className="img-fluid" src="https://mlacs2tgq0cm.i.optimole.com/cpGlJmY-kXkwTRqJ/w:auto/h:auto/q:auto/https://charterassetmanagement.com/wp-content/uploads/2018/10/pexels-photo-1181435.jpg" alt="" />
                </div>

                <div className="about-info"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 about-inner">
                                <h2>Company Growth</h2>
                                <p>From 2006 to 2019, the company has not only grown significantly but also has evolved to become the leading Software Development & IT Service Provider company in Bangladesh. We have made it to next in terms of global reach and we have gained reputation in the course.</p>
                            </div>

                            <div className="col-md-6">
                                <img className="img-fluid" src="https://www.slideteam.net/media/catalog/product/cache/960x720/c/o/company_market_growth_rate_bar_graph_ppt_slide_Slide01.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container about-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://blog.ipleaders.in/wp-content/uploads/2016/06/Company_picture.jpg" alt="" />
                        </div>

                        <div className="col-md-6 about-inner">
                            <h1 className="mb-5">Let Us Help You Accelerate Your Digital Transformation</h1>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default About;