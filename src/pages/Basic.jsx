import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hardware_details from '../components/Hardware_details';
import "./Course-page.css";

function Basic() {
  return (
    <div>
      <Navbar />
      <div className='Basic-course'>
        <div className='course-hero'>
          <div className='basic-img'>
            <img src="https://plus.unsplash.com/premium_photo-1663047430590-f2947119c3f0?w=1200&auto=format&fit=crop&q=80" alt="Basic mobile repair course" />
          </div>
          <div className='basic-content'>
            <div className='course-copy'>
              <span className='course-label'>Fundamentals of Mobile Repair</span>
              <h2 className='basic-content-h2'>Basic course</h2>
              <p>Unlock the essentials of mobile servicing with hands-on training for diagnostics, component replacement, and tool mastery.</p>
            </div>
          </div>
        </div>
        <div className='course-cards-section'>
          <Hardware_details />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Basic;