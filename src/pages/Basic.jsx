import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hardware_details from '../components/Hardware_details';
import "./Course-page.css";

function Basic() {
  return (
    <div>
      <Navbar/>
        <div className='Basic-course'>
         <div className='basic-img'>
            <img src="https://plus.unsplash.com/premium_photo-1663047430590-f2947119c3f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHJlcGFpcmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
         </div>


         <div className='basic-content'>
            
            <h2 className='basic-content-h2'>Basic course </h2>
         <Hardware_details/>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Basic;