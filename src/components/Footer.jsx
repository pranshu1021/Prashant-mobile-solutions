
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Aboutus from "./Aboutus";
import {Link} from "react-router-dom" ;




function Footer (){
    return(
        <footer className="footer">
            <div className="footer-top" role="contentinfo" aria-label="contact">
                <div className="contact-container">
                    <h4><FaPhoneAlt aria-hidden="true"/> Phone</h4>
                    <p>+91 89203 43448
                      
                    </p>
                    <p>  +91 92893 22219</p>
                </div>
                <div className="email-container">
                    <h4><MdEmail aria-hidden="true"/> Email</h4>
                    <p>abc@gmail.com</p>
                </div>
                <div className="location-container">
                    <h4><FaLocationDot aria-hidden="true"/> Location</h4>
                    <p>C15/9, Gali No. 1, Near Bus Stand, Bhajanpura, Delhi 110053</p>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-left">
                    <div className="about">
                        <img src="https://res.cloudinary.com/dduglrbdj/image/upload/v1782795580/Heading_1_raetqb.png" alt="Prashant Mobile Solutions logo"/>
                        <h2>About us</h2>
                        <p>We believe every student has the potential to build a successful career. Through practical training, expert guidance, and industry-focused learning, we prepare future mobile technicians with the skills and confidence to succeed.</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="links">
                        <h3>Important Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="policies">
                        <h3>Policies</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <div className="copyright-section">
                    <MdCopyright aria-hidden="true" />
                    <p>Copyright 2025. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;