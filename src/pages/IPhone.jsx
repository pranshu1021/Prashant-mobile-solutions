import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hardware_details from '../components/Hardware_details';
import AdvanceTopic from '../components/AdvanceTopic';
import IPhonepage from '../components/IPhonepage';
import "./Course-page.css";

function IPhone() {
  return (
    <div>
    <Navbar/>
        <div className='Iphone-course'>
         <div className='iphone-img'>
            <img src="https://images.unsplash.com/photo-1588515603140-81bd9f7d1db0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwcmVwYXJpaW5nfGVufDB8fDB8fHww" alt="" />
         </div>


         <div className='iphone-content'>
            
            <h2 className='iphone-content-h2'>Basic course </h2>
           <Hardware_details/>
           <AdvanceTopic/>
           <IPhonepage/>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default IPhone;