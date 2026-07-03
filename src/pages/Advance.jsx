import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hardware_details from '../components/Hardware_details'
import AdvanceTopic  from '../components/AdvanceTopic'
import "./Course-page.css";

function Advance() {
  return (
    <div>
    <Navbar/>
        <div className='Advance-course'>
         <div className='advance-img'>
            <img src="https://plus.unsplash.com/premium_photo-1663021816337-be7fb3833336?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>


         <div className='advance-content'>
            
            <h2 className='advance-content-h2'>Basic course </h2>
            <Hardware_details/>
            <AdvanceTopic/>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Advance;
