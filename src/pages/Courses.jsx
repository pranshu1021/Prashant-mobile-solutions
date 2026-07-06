import CardSwap, { Card } from '../components/CardSwap'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Courses.css'
import {useTranslation} from "react-i18next"
function Courses (){
  const{t}=useTranslation();
    return(
<>
<Navbar />

<div className="Courses-container">
  <div className="courses-content">
    <div className="courses-left">
      <h1>{t("courses_page.heading")}</h1>
      <h3>{t("courses_page.subheading")}</h3>
      <p>
        {t("courses_page.description")}
      </p>
      <ul>
        <li>{t("courses_page.list.0")}</li>
        <li>{t("courses_page.list.1")}</li>
        <li>{t("courses_page.list.2")}</li>
      </ul>
    </div>

    <div className="courses-right">
      <div className="courses-swap-wrapper">
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