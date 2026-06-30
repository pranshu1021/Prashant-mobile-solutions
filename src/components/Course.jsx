import "./Course.css";
import { GiVintageRobot, GiAutoRepair } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import Basic from "../pages/Basic";
import {useNavigate} from "react-router-dom" ;
import {Link} from "react-router-dom" ;

function Course() {
  const navigate = useNavigate();
  return (
    <div className="Courses">

        <div className="cards">
      <div className="Mobile-card blue">
        <div className="image" aria-hidden="true">
          <GiVintageRobot size={30} />
          <span>Beginner</span>
        </div>

        <div className="content">
          <h2>Android Mobile Repair-Basic</h2>
          <p>
            Learn Android device basics,hardware
            components,disassembly,soldering basics and common fault repairs
            from scratch.
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
        <button type="button" className="enroll-butn" onClick={()=> navigate("/basic-android") }> Enroll Now </button>
      </div>


      <div className="Mobile-card green">
        <div className="image" aria-hidden="true">
          <GiAutoRepair size={25} />
          <span>Advanced</span>
        </div>

        <div className="content">
          <h2>Advanced Android Repair</h2>
          <p>
         
            Advanced chip-level repairs,eMMC/CPU programming,board
            tracking,software issues and advanced troubleshooting techniques.
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
        <Link to = "/advance-android"><button type="button" className="enroll-butn second">Enroll Now</button></Link>
      </div>


      <div className="Mobile-card purple">
        <div className="image" aria-hidden="true">
          <FaApple size={25} />
          <span>Advanced</span>
        </div>

        <div className="content">
          <h2>Complete iPhone Repair</h2>
          <p>
            Complete training on iPhone hardware,Face ID , True Tone,baseband
            issues, microsoldering,and advanced chip-level repairs.
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
        <Link to = "/iphone-course"><button type="button" className="enroll-butn third">Enroll Now</button></Link>
      </div>
      </div>
    </div>
  );
}
export default Course;
