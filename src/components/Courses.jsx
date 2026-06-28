import "./Courses.css";

function Courses() {
  return (
    <div id="courses">
      <div className="card">
        <img src="/src/assets/pms-imgs/book-placeholder.png" alt="Course book" />
        <span>Beginner</span>

        <div className="Service-content">
          <h2>Foundation in Mobile Repair</h2>
          <p>
            Learn smartphone hardware fundamentals, repair tools, and core
            techniques from the ground up.
          </p>
        </div>
        <div className="course-details">
          <div className="detail">
            <span>
              <div>Duration</div>
              <div>Eligibility</div>
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
        <button type="button" className="Enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
}

export default Courses;
