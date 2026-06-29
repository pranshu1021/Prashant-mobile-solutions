import './Hero.css'
import TiltedCard from './TiltedCard';
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
                        <button type="button" className='primary-btn'>Book Repair</button>
                        <button type="button" className='secondary-btn'>Explore Courses</button>
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
  altText="Kendrick Lamar - GNX Album Cover"
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