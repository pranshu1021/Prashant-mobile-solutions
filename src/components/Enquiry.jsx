import React from 'react';
import "./Enquiry.css";

function Enquiry() {
  return (
    <div>
          <div className='Enquiry-form'>
            <form action="">
                <label id='username' htmlFor=""></label>
                <input type="name" name="username" id="username" placeholder='Enter your name' />
                
                <label id='email' htmlFor=""></label>
                <input type="email" name='email' id='email' placeholder='Enter your email' />

                <select name="course" id="course">
                  <input type="couse" placeholder='Choose any course' />
                  <option value="Iphone reparining">Iphone reparining</option>
                  <option value="Mobile reparining">Mobile reparining</option>
                  <option value="Hardware reparining">Hardware reparining</option>
                </select>

                <button>Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default Enquiry;