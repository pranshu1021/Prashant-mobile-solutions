import CardSwap, { Card } from '../components/CardSwap'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Courses.css'
function Courses (){
    return(
<>
<Navbar />

<div className="Courses-container">
<div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card className="Courses-page-card">
      <h3>Basic Android Repair</h3>
      <p> Learn Android device basics,hardware components,disassembly,soldering basics and common fault repairs from scratch.
</p>
    </Card>
    <Card className="Courses-page-card">
      <h3>Advanced Android Repair</h3>
      <p>Advanced chip-level repairs,eMMC/CPU programming,board tracking,software issues and advanced troubleshooting techniques.</p>
    </Card>
    <Card className="Courses-page-card">
      <h3>Complete iPhone repair</h3>
      <p>Complete training on iPhone hardware,Face ID , True Tone,baseband issues, microsoldering,and advanced chip-level repairs.
</p>
    </Card>
  </CardSwap>
</div>


</div>

<Footer />

</>

    )
}

export default Courses;