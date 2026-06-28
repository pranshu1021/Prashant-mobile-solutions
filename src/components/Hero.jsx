import './Hero.css'

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
                    <img
                        src="https://images.unsplash.com/photo-1592890288564-76628a30a657?w=1000&auto=format&fit=crop&q=80"
                        alt="Technician repairing a smartphone"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;