import "./Navbar.css"
import Logo from "./assets/pms-imgs/pms-logo.png"
function Navbar(){
    return ( 
        <header className = "navbar">
        <div className="nav-container">
    
    <div className="brand">
    <img src={Logo} alt="Prashant Mobile Solutions Logo" className="logo"/>
    <h2>Prashant Mobile Solutions</h2>
    </div>

<nav className="nav_links">
    <a href="#">Home</a>
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#">Courses</a>
    <a href="#">Contact Us</a>
    
</nav>


<div className="nav-buttons">
        <a className="login-btn" href="#login">Login</a>
        <a className="signup-btn" href="#login">Sign Up</a>
</div>
</div>
</header>
    )
}


export default Navbar; 