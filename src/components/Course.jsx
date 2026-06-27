import "./Course.css"
import { GiVintageRobot } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { FaApple } from "react-icons/fa";


function Course (){
    return ( <div>
        <div className="Mobile-card">
        <div className="image">
        <GiVintageRobot />

        
        
        </div>

        <div className="content">
        <h2>Android Mobile Repair-Basic</h2>
        <p>Learn Android device basics,hardware components,disassembly,soldering basics and 
            common fault repairs from scratch.
        </p>
        <div className="Content-description">
        <strong>4 weeks</strong>
        <span>-Full time</span>
</div>
<div className="Content-desc-eligibility">
<span>Eligible:</span>
<strong>10th Pass</strong>

</div>
<div className="Content-desc-condition">
    <span>Certificate included</span>



</div>

        </div>
<div className="enroll-butn">Enroll Now</div>



        </div>


<div className="Mobile-card">
        <div className="image">
        <GiAutoRepair />


        
        
        </div>
        
        <div className="content">
        <h2>Advanced Android Repair</h2>
        <p> Advanced chip-level repairs,eMMC/CPU programming,board tracking,software issues
            and advanced troubleshooting techniques.
        </p>
        <div className="Content-description">
        <strong>8 Weeks</strong>
        <span>-Full-time</span>
</div>
<div className="Content-desc-eligibility">
<span>Eligible:</span>
<strong>12th Pass</strong>

</div>
<div className="Content-desc-condition">
    <span>Certificate included</span>



</div>

        </div>
<div className="enroll-butn">Enroll Now</div>



        </div>


        <div className="Mobile-card">
        <div className="image">
       <FaApple />


        
        
        </div>
        
        <div className="content">
        <h2>Complete iPhone Repair</h2>
        <p>Complete training on iPhone hardware,Face ID , True Tone,baseband issues,
            microsoldering,and advanced chip-level repairs.
        </p>
        <div className="Content-description">
        <strong>10 weeks</strong>
        <span>-Full time</span>
</div>
<div className="Content-desc-eligibility">
<span>Eligible:</span>
<strong>12th Pass</strong>

</div>
<div className="Content-desc-condition">
    <span>Certificate included</span>



</div>

        </div>
<div className="enroll-butn">Enroll Now</div>



        </div>

        </div>
    )
}
export default Course;
