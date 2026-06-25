import "./Navbar.css"
import Logo from "./assets/pms-imgs/pms-logo.png"
function Navbar(){
    return ( 
        <div>
<div>
<nav className="Nav_bar">
    <h2 className="logo">Logo</h2>
   <img src={Logo}></img>

    <a href="#">home</a>
    <a href="#">About</a>
    <a href="#">Section</a>
    <a href="#">contact</a>
    <a href="#">Courses</a>
<div className="Sign_up">
    
        <a href="#">Login</a>
        <a href="#">Sign-up</a>

</div>

</nav>

</div>
        </div>
    )
}

export default Navbar;