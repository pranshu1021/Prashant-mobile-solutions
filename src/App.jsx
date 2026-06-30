import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Basic from './pages/Basic'
import Advance from './pages/Advance'
import IPhone from './pages/Iphone'
function App() {
  return (
    
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/basic-android" element ={<Basic/>}/>
  <Route path = "/advance-android" element ={<Advance/>}/>
  <Route path = "/iphone-course" element = {<IPhone/>}/>
</Routes>
    
  )
}

export default App;