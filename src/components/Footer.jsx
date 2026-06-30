
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";



function Footer (){
    return(
        <footer className="footer">
            <div className="footer-top" role="contentinfo" aria-label="contact">
                <div className="contact-container">
                    <h4><FaPhoneAlt aria-hidden="true"/> Phone</h4>
                    <p>+91 0001234567</p>
                </div>
                <div className="email-container">
                    <h4><MdEmail aria-hidden="true"/> Email</h4>
                    <p>abc@gmail.com</p>
                </div>
                <div className="location-container">
                    <h4><FaLocationDot aria-hidden="true"/> Location</h4>
                    <p>F-141, F-Block 3D Futa Road, Khajuri Khas Delhi 110090</p>
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
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