import './Hero.css'
import TiltedCard from './TiltedCard';

import { HashLink } from 'react-router-hash-link';
function Hero (){
    return (
        <section id="home" className="hero">
            <div className="hero-Container">
                <div className='hero-text'>
                    <h2>Prashant Mobile Solutions</h2>
                    <h3> Expert Mobile Repairs And Industry Focused Training </h3>
                    <p>
                        We provide reliable mobile repair services along with professional
                        training programs to help students build successful careers in the
                        mobile repairing industry. Trusted service, experienced technicians,
                        and practical learning, all under one roof.
                    </p>
                    <div className="hero-buttons">
                        <HashLink smooth to  ="/#Courses"className='primary-btn'>Book Repair</HashLink>
                       <HashLink smooth to ="/#Courses" className='secondary-btn'>Explore Courses</HashLink>
                    </div>
                </div>

                <div className="hero-Image">
                    {/* <img
                        src="https://res.cloudinary.com/ddxn7wurs/image/upload/f_auto,q_auto/v1782713779/image11_hub4mo.heic"
                        alt="Technician repairing a smartphone"
                        loading="lazy"
                    /> */}
                    <TiltedCard className="tiltedimg"
  imageSrc="https://res.cloudinary.com/ddxn7wurs/image/upload/f_auto,q_auto/v1782713779/image11_hub4mo.heic"
  
  captionText="PMS"
  containerHeight="500px"
  containerWidth="300px"
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