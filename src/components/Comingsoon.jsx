import Navbar from "./Navbar";
import Footer from "./Footer";
import './Comingsoon.css';
function Comingsoon (){
    return(
<>
<div className="Comingsoonpage">
    <Navbar />
    <div className="Comingsooncontainer">
<div className="Comingsooncontent">
<h1>Student Portal Coming Soon </h1>
<p> Our dedicated portal for Students and Users is on its way.</p>
<p>Soon you will be able to create an Account,Login securely,Access Course Material,Track your progress,And Enjoy many more features.</p>
<p className="Heading">Team PMS</p>
</div>
</div>
<Footer />
</div>
</>
    )
}


export default Comingsoon;