import './Service.css'
import { SiAuth0 } from "react-icons/si";

function Service(){
    return (
<div className="service-card">

<div className="image">
  <SiAuth0 size={35}/>

</div>
<div className="content">
<h4>Certified Technicians</h4>
<p>Industry-trained & Verified experts</p>
</div>
</div>
    )
}

export default Service;