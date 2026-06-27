import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'


import Services from './components/Services.jsx'
import Courses from './components/Courses.jsx'
import Course from './components/Course.jsx'
function App(){
    return( 
    <div>
       
       <Navbar/> 
       <Hero/>
       
      <Services/>
      {/* <Courses/> */}
      <Course/>
    </div>
    )
}
export default App;
