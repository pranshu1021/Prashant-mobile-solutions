import "./Courses.css"
function Courses() {
  return (
    <div>
        <div className="card">
           <img src="https://thenounproject.com/icon/book-1183858/" alt="" /> 
           <span>Begineer</span>

           <div className="Service-content">
            <h2>Foundation in Mobile Repair</h2>
            <p>Learn Smartphone hardware fundamentals,repair tools, and core techniques from the groud  up.</p>

           </div>
           <div className="course-details">
         <div className="detail">
      <span>
  <div>Duration</div>
  <div>Eligibilty</div>
  <div>Training</div>
  <div>Certificate</div>
      </span>
      <strong>
<div>4 weeks</div>
<div>10th pass</div>
<div>Practical</div>
<div>Included</div>
      </strong>
         </div>
           </div>

           <div className="Enroll-btn">Enroll Now</div>
        </div>
    </div>
  )
}

export default Courses;