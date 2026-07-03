
import Service from './Service'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { SiAuth0 } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";
import './Services.css';

const details=[
  {svg:<SiAuth0 size={30} aria-hidden="true"/>,heading:"Certified Technicians",p:"Industry-trained & Verified experts"},
  {svg:<RiCheckboxCircleLine size={30} aria-hidden="true"/>,heading:"Genuine Spare Parts",p:"Authentic parts for lasting long."},
  {svg:<MdCastForEducation size={30} aria-hidden="true"/>,heading:"Practical Training",p:"Hands-on learning with real devices."},
  {svg:<FiAward size={30} aria-hidden="true"/>,heading:"Transparent Pricing",p:"No hidden charges, honest estimates."}
];

function Services (){
  return (
    <>
    <div id="services" className='Services-container'>
      {details.map((item , index)=>( 
        <Service key={index} svg = {item.svg} heading = {item.heading} p = {item.p}/>
      ))}
    </div>
    </>
  )
}

export default Services;