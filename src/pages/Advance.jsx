import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hardware_details from '../components/Hardware_details'
import AdvanceTopic  from '../components/AdvanceTopic'
import "./Course-page.css";

function Advance() {
  return (
    <div>
      <Navbar />
      <div className='Advance-course'>
        <div className='course-hero'>
          <div className='advance-img'>
            <img src="https://plus.unsplash.com/premium_photo-1663021816337-be7fb3833336?q=80&w=1400&auto=format&fit=crop" alt="Advanced mobile repair techniques" />
          </div>
          <div className='advance-content'>
            <div className='course-copy'>
              <span className='course-label'>Advanced Repair Training</span>
              <h2 className='advance-content-h2'>Advanced course</h2>
              <p>Master board-level diagnostics, premium soldering techniques, and expert mobile repair workflows designed for serious technicians.</p>
            </div>
          </div>
        </div>
        <div className='course-cards-section'>
          <AdvanceTopic />
          <Hardware_details />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Advance;
