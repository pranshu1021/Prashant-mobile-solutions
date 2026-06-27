
import Service from './Service'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { SiAuth0 } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";

const details=[
  {svg:<SiAuth0 size={35}/>,heading:"Certified Technicians",
  p:"Industry-trained & Verified experts"},
  
  {svg:<RiCheckboxCircleLine />,heading:"Genuine Spare Parts",p:"Authentic parts for lasting performance."},
  
  { svg:<MdCastForEducation />,heading:"Practical Training",p:"Hands-on learning with real devices."},
  
  { svg:<FiAward />,heading:"Transparent Pricing",p:"No hidden charges, honest estimates."}
  ];

function Services (){
  return (
<Service/>
  )
}

export default Services;