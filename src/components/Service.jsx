import './Service.css'
import { SiAuth0 } from "react-icons/si";

function Service({svg,heading,p}){
    return (
<div className="service-card">

<div className="image">
  {
    svg
  }

</div>
<div className="content">
<h4>{heading}</h4>
<p>
    {p}
</p>
</div>
</div>
    )
}

export default Service;