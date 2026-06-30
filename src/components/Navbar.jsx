import "./Navbar.css"
import Logo from "../assets/pms-imgs/pms-logo.png"
import ClickSpark from './ClickSpark.jsx'
function Navbar(){
        return ( 
            <ClickSpark>
                <header className = "navbar" role="navigation" aria-label="Main navigation">
            
                <div className="nav-container">
    
        <div className="brand">
            <img src={Logo} alt="Prashant Mobile Solutions Logo" className="logo"/>
           
        </div>

        <nav className="nav_links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#contact">Contact Us</a>
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