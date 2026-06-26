import './Hero.css'
function Hero (){
return (
<section className="hero">
<div className="hero-Container">

    <div className='hero-text'> <h2>Prashant Mobile Solutions</h2>
<h3> Expert Mobile Repairs And Industry Focused Training </h3>
<p> We provide reliable mobile repair services along with professional training programs to help students build successful careers in the mobile repairing industry. Trusted service, experienced technicians, and practical learning, all under one roof.</p></div>
<div className="hero-buttons">
    <button className='primary-btn'>Book Repair</button>
    <button className='secondary-btn'>Explore Courses</button>
</div>

<div className="hero-Image">
    <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D" ></img>
</div>
</div>

</section>
)
}
export default Hero;