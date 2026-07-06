import "./Navbar.css"
import { useState } from "react"
import Logo from "../assets/pms-imgs/pms-logo.png"
import ClickSpark from './ClickSpark.jsx'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const {i18n}= useTranslation();
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
                            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link to="/gallerypage" onClick={() => setMenuOpen(false)}>Gallery</Link>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>

                            <div>
                                <button onClick={()=> i18n.changeLanguage("en")}>
                                    English
                                </button>
                                <button onClick={()=> i18n.changeLanguage("hi")}>
                                    Hindi
                                </button>
                            </div>
                        </nav>

                        <div className="nav-buttons">
                            <Link to="/comingsoonpage" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
                            <Link to="/comingsoonpage" className="signup-btn" onClick={() => setMenuOpen(false)}>Signup</Link>
                        </div>
                    </div>
                </div>
            </header>
        </ClickSpark>
    )
}

export default Navbar; 