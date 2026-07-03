import React from 'react';
import "./Hardware_sol.css";

function Hardware_sol(props) {
  return (
    <div> 
        <div className='Hardware-sol'>
  <div className='Hardware-sol-card' >
            <img src= {props.img_url} alt="" />
            <h3 className='hardware-sol-heading'>{props.heading}</h3>
           <p className='hardware-sol-para'>{props.para}</p>
          
        </div>
     </div>
      
    </div>
  )
}

export default Hardware_sol