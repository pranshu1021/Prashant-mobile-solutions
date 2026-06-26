import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Service from './components/Service.jsx'
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';

function App(){
    return( 
    <div>
       
       <Navbar/> 
       <Hero/>
       <Service/>
       <Services/>
    </div>
    )
}
export default App;
