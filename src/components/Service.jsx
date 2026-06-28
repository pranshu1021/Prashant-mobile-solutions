import './Service.css'

function Service({svg,heading,p}){
    return (
      <div className="service-card">
        <div className="image" aria-hidden="true">
          {svg}
        </div>
        <div className="content">
          <h4>{heading}</h4>
          <p>{p}</p>
        </div>
      </div>
    )
}

export default Service;