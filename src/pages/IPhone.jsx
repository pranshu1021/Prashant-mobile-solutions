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
      <Navbar />
      <div className='Iphone-course'>
        <div className='course-hero'>
          <div className='iphone-img'>
            <img src="https://images.unsplash.com/photo-1588515603140-81bd9f7d1db0?w=1200&auto=format&fit=crop&q=80" alt="iPhone repair course" />
          </div>
          <div className='iphone-content'>
            <div className='course-copy'>
              <span className='course-label'>iPhone Specialist Track</span>
              <h2 className='iphone-content-h2'>Apple repair expertise</h2>
              <p>Learn iPhone-specific diagnostics, screen replacements, battery servicing, and genuine component upgrades for premium devices.</p>
            </div>
          </div>
        </div>
        <div className='course-cards-section'>
          <Hardware_details />
          <AdvanceTopic />
          <IPhonepage />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IPhone;