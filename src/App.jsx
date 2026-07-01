import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Basic from './pages/Basic'
import Advance from './pages/Advance'
import IPhone from './pages/IPhone'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Services from './components/Services'
import Courses from './components/Courses'
function App() {
  return (
    
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/basic-android" element ={<Basic/>}/>
  <Route path = "/advance-android" element ={<Advance/>}/>
  <Route path = "/iphone-course" element = {<IPhone/>}/>
  <Route path = "/about" element = {<Aboutus/>}/>
  <Route path = "/contact" element = {<Contact/>}/>
  <Route path = "/services" element = {<Services/>}/>
  <Route path = "/courses" element = {<Courses/>}/>
</Routes>
    
  )
}

export default App;