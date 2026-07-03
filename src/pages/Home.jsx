
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import Services from '../components/Services.jsx'
import Course from '../components/Course.jsx'
import ClickSpark from '../components/ClickSpark.jsx'
import Enquiry from '../components/EnquiryForm.jsx'
import Footer from '../components/Footer.jsx'
import Gallery from '../components/Gallery.jsx';
import {Routes,Route} from "react-router-dom";
import Basic from './Basic.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Hardware_sol from '../components/Hardware_sol.jsx'
import Hardware_details from '../components/Hardware_details.jsx'


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
       <Gallery />
       <EnquiryForm/>
    <Hardware_details/>
      <Footer/>
      </ClickSpark>
     
   
    </div>
  )
}

export default Home;
