import "./Course.css";
import { GiVintageRobot, GiAutoRepair } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import Basic from "../pages/Basic";
import {useNavigate} from "react-router-dom" ;
import {Link} from "react-router-dom" ;
import { useTranslation } from "react-i18next";

function Course() {
   const {t}=useTranslation();
  const navigate = useNavigate();
  return (
    <div id="Courses" className="Courses">

        <div className="cards">
      <div className="Mobile-card blue">
        <div className="image" aria-hidden="true">
          <GiVintageRobot size={30} />
          <span>{t("course_cards.basic.level")}</span>
        </div>

        <div className="content">
          <h2>{t("course_cards.basic.title")}</h2>
          <p>
          {t("course_cards.basic.description")}
          </p>
          <div className="Content-description">
            <strong>{t("course_cards.basic.duration")}</strong>
            <span>{t("course_cards.basic.schedule")}</span>
          </div>
          <div className="Content-desc-eligibility">
            <span>{t("course_cards.basic.eligibility_label")}</span>
            <strong>{t("course_cards.basic.eligibility")}</strong>
          </div>
          {/*  */}
        </div>
        <button type="button" className="enroll-butn" onClick={()=> navigate("/basic-android") }>{t("course_cards.basic.btn_enroll")} </button>
      </div>


      <div className="Mobile-card green">
        <div className="image" aria-hidden="true">
          <GiAutoRepair size={25} />
          <span>{t("course_cards.advanced_android.level")}</span>
        </div>

        <div className="content">
          <h2>{t("course_cards.advanced_android.title")}</h2>
          <p>
         {t("course_cards.advanced_android.description")}
          </p>
          <div className="Content-description">
            <strong>{t("course_cards.advanced_android.duration")}</strong>
            <span>-{t("course_cards.advanced_android.schedule")}</span>
          </div>
          <div className="Content-desc-eligibility">
            <span>{t("course_cards.advanced_android.eligibility_label")}</span>
            <strong>{t("course_cards.advanced_android.eligibility")}</strong>
          </div>
          {/* <div className="Content-desc-condition"> */}
            {/* <span>Certificate included</span> */}
          {/* </div> */}
        </div>
      <button type="button" className="enroll-butn second" onClick={()=> navigate("/advance-android") }>{t("course_cards.advanced_android.btn_enroll")}</button>
      </div>


      <div className="Mobile-card purple">
        <div className="image" aria-hidden="true">
          <FaApple size={25} />
          <span>{t("course_cards.iphone.level")}</span>
        </div>

        <div className="content">
          <h2>{t("course_cards.iphone.title")}</h2>
          <p>
            {t("course_cards.iphone.description")}
          </p>
          <div className="Content-description">
            <strong>{t("course_cards.iphone.duration")}</strong>
            <span>{t("course_cards.iphone.schedule")}</span>
          </div>
          <div className="Content-desc-eligibility">
            <span>{t("course_cards.iphone.eligibility_label")}</span>
            <strong>{t("course_cards.iphone.eligibility")}</strong>
          </div>
          {/* <div className="Content-desc-condition">
            <span>Certificate included</span>
          </div> */}
        </div>
        <button type="button" className="enroll-butn third" onClick={()=> navigate("/iphone-course") } >{t("course_cards.iphone.btn_enroll")}</button>
      </div>
      </div>
    </div>
  );
}
export default Course;
