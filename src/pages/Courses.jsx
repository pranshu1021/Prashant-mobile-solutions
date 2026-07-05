import CardSwap, { Card } from '../components/CardSwap'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Courses.css'
function Courses (){
    return(
<>
<Navbar />

<div className="Courses-container">
  <div className="courses-content">
    <div className="courses-left">
      <h1>Our Courses</h1>
      <h3>Learn practical mobile repair</h3>
      <p>
        We offer hands-on training from basic hardware repair to advanced
        chip-level techniques. Choose from structured tracks for Android and
        iPhone repair, with practical labs, soldering practice and troubleshooting.
      </p>
      <ul>
        <li>Basic Android Repair — components, disassembly, common faults</li>
        <li>Advanced Android Repair — eMMC/CPU programming, diagnostics</li>
        <li>Complete iPhone Repair — Face ID, board-level repairs, microsoldering</li>
      </ul>
    </div>

    <div className="courses-right">
      <div style={{ height: '600px', position: 'relative' }}>
        <CardSwap
          width={500}
          height={400}
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card className="Courses-page-card">
            <h3>Basic Android Repair</h3>
            <p>
              Learn Android device basics, hardware components, disassembly,
              soldering basics and common fault repairs from scratch.
            </p>
          </Card>
          <Card className="Courses-page-card">
            <h3>Advanced Android Repair</h3>
            <p>
              Advanced chip-level repairs, eMMC/CPU programming, board
              tracking, software issues and advanced troubleshooting techniques.
            </p>
          </Card>
          <Card className="Courses-page-card">
            <h3>Complete iPhone repair</h3>
            <p>
              Complete training on iPhone hardware, Face ID, True Tone, baseband
              issues, microsoldering, and advanced chip-level repairs.
            </p>
          </Card>
        </CardSwap>
      </div>
    </div>
  </div>
</div>

<Footer />

</>

    )
}

export default Courses;