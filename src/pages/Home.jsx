
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import Services from '../components/Services.jsx'
import Course from '../components/Course.jsx'
import ClickSpark from '../components/ClickSpark.jsx'
import Enquiry from '../components/Enquiry.jsx'
import Footer from '../components/Footer.jsx'
import Gallery from '../components/Gallery.jsx';
import {Routes,Route} from "react-router-dom";
import Basic from './Basic.jsx'


function Home() {
  return (
    <div>
        <ClickSpark
  sparkColor="#2563eb"
  sparkSize={12}
  sparkRadius={18}
  sparkCount={10}
  duration={500}
>
      <Navbar />
      <Hero />
      <Services />
      <Course />
      <Footer/>
      </ClickSpark>
      <Gallery />
   
    </div>
  )
}

export default Home;
