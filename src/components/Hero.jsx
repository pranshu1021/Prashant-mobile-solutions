import './Hero.css'
import TiltedCard from './TiltedCard';
import {useTranslation} from "react-i18next"
import { HashLink } from 'react-router-hash-link';
function Hero (){
    const {t}=useTranslation();
    return (
        <section id="home" className="hero">
            <div className="hero-Container">
                <div className='hero-text'>
                    <h2>Prashant Mobile Solutions</h2>
                    <h3>{t("hero.subtitle")}</h3>
                    <p>{t("hero.description")}</p>
                       
                    <div className="hero-buttons">
                        <HashLink smooth to  ="/#Courses"className='primary-btn'>{t("hero.cta_bookRepair")}</HashLink>
                       <HashLink smooth to ="/#Courses" className='secondary-btn'>{t("hero.cta_exploreCourses")}</HashLink>
                    </div>
                </div>

                <div className="hero-Image">
                   
                    <TiltedCard className="tiltedimg"
  imageSrc="https://res.cloudinary.com/ddxn7wurs/image/upload/f_auto,q_auto/v1782713779/image11_hub4mo.heic"
  
  captionText="PMS"
  containerHeight="500px"
  containerWidth="100%"
  imageHeight="500px"
  imageWidth="700px"
  rotateAmplitude={12}
  scaleOnHover={1.03}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
/>
                </div>
            </div>
        </section>
    )
}

export default Hero;