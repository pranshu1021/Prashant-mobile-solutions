
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Aboutus from "./Aboutus";
import {Link} from "react-router-dom" ;
import { useTranslation } from "react-i18next";




function Footer (){
    const {t}=useTranslation();
    return(
        <footer className="footer">
            <div className="footer-top" role="contentinfo" aria-label="contact">
                <div className="contact-container">
                    <h4><FaPhoneAlt aria-hidden="true"/>{t("footer.phone_label")}</h4>
                    <p>+91 89203 43448
                      
                    </p>
                    <p>  +91 92893 22219</p>
                </div>
                <div className="email-container">
                    <h4><MdEmail aria-hidden="true"/>{t("footer.email_label")}</h4>
                    <p>teamprashantmobilesolutions@gmail.com</p>
                </div>
                <div className="location-container">
                    <h4><FaLocationDot aria-hidden="true"/>{t("footer.location_label")}</h4>
                    <p>C15/9, Gali No. 1, Near Bus Stand, Bhajanpura, Delhi 110053</p>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-left">
                    <div className="about">
                        <img src="https://res.cloudinary.com/dduglrbdj/image/upload/v1782795580/Heading_1_raetqb.png" alt="Prashant Mobile Solutions logo"/>
                        <h2>{t("footer.about_heading")}</h2>
                        <p>{t("footer.about_paragraph")}</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="links">
                        <h3>{t("footer.important_links_heading")}</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="policies">
                        <h3>{t("footer.policies_heading")}</h3>
                        <ul>
                            <li>{t("footer.policies.privacy")}</li>
                            <li>{t("footer.policies.cookie")}</li>
                            <li>{t("footer.policies.terms")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <div className="copyright-section">
                    <MdCopyright aria-hidden="true" />
                    <p>{t("footer.copyright")}</p>
                    <p className="credits"> |   Designed and Developed by <span className="credit-company">TheFineWorks</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;