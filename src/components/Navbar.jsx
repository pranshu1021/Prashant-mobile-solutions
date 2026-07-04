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
            
            <Link to="/gallerypage">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            
            
        </nav>


        <div className="nav-buttons">
      <Link to = "/comingsoonpage" className="login-btn">Login</Link>
         <Link to = "/comingsoonpage" className="signup-btn">Signup</Link>   
        </div>
    </div>
</header>
</ClickSpark>
        )
}


export default Navbar; 