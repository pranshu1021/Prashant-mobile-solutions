import "./Navbar.css"
import Logo from "../assets/pms-imgs/pms-logo.png"
import ClickSpark from './ClickSpark.jsx'
import { Link } from "react-router-dom";

function Navbar(){
        return ( 
            <ClickSpark>
                <header className = "navbar" role="navigation" aria-label="Main navigation">
            
                <div className="nav-container">
    
        <div className="brand">
            <Link to ="/"><img src={Logo} alt="Prashant Mobile Solutions Logo" className="logo"/></Link>
           
        </div>

        <nav className="nav_links" aria-label="Primary">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallerypage">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>


        <div className="nav-buttons">
            <a className="login-btn" href="#login">Login</a>
            <a className="signup-btn" href="#signup">Sign Up</a>
        </div>
    </div>
</header>
</ClickSpark>
        )
}


export default Navbar; 