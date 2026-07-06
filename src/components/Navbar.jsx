import "./Navbar.css"
import { useState } from "react"
import Logo from "../assets/pms-imgs/pms-logo.png"
import ClickSpark from './ClickSpark.jsx'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const {i18n}= useTranslation();
    const {t}=useTranslation();
    return (
        <ClickSpark>
            <header className="navbar" role="navigation" aria-label="Main navigation">
                <div className="nav-container">
                    <div className="brand">
                        <Link to="/">
                            <img src={Logo} alt="Prashant Mobile Solutions Logo" className="logo" />
                        </Link>
                    </div>

                    <button
                        type="button"
                        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <nav className="nav_links" aria-label="Primary">
                            <Link to="/" onClick={() => setMenuOpen(false)}>{t("navbar.home")}</Link>
                            <Link to="/gallerypage" onClick={() => setMenuOpen(false)}>{t("navbar.gallery")}</Link>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>{t("navbar.about")}</Link>
                            <Link to="/courses" onClick={() => setMenuOpen(false)}>{t("navbar.courses")}</Link>

                            <div>
                                <button onClick={()=> i18n.changeLanguage("en")}>
                                    English
                                </button>
                                <button onClick={()=> i18n.changeLanguage("hi")}>
                                    {t("navbar.language_hindi")}
                                </button>
                            </div>
                        </nav>

                        <div className="nav-buttons">
                            <Link to="/comingsoonpage" className="login-btn" onClick={() => setMenuOpen(false)}>{t("navbar.login")}</Link>
                            <Link to="/comingsoonpage" className="signup-btn" onClick={() => setMenuOpen(false)}>{t("navbar.signup")}</Link>
                        </div>
                    </div>
                </div>
            </header>
        </ClickSpark>
    )
}

export default Navbar; 