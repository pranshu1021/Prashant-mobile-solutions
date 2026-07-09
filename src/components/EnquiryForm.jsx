import {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import "./EnquiryForm.css"
import {useTranslation} from "react-i18next"
export default function EnquiryForm(){
    const{t}=useTranslation();
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        email: "",
        course:"",
        message:"",
    });

    //const [showPopup,setShowPopup] = useState(false);
    
    useEffect(()=>{
         //setShowPopup(true);
        
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    },[])

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(()=>{
            alert("Enquiry is sent to your email successfully.")
            setFormData({
              name:"",
                phone:"",
                email: "",
                course:"",
                message:"",
            });
        })
        .catch((error)=>{
            console.error("EmailJS Error:", error);
            alert("couldn't send your email, Please try again.")
        });
    };

    return(<section className="enquiry-section" id="enquiry">
        <div className="enquiry-card">
            <div className="enquiry-intro">
                <p className="enquiry-tag">{t("enquiry_form.tag")}</p>
                <h2>{t("enquiry_form.title")}</h2>
                <p>{t("enquiry_form.description")}</p>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
                <input type="text" 
                placeholder={t("enquiry_form.placeholder_name")}
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required />

                <input type="tel" 
                name="phone" 
                placeholder= {t("enquiry_form.placeholder_phone")}
                value={formData.phone}
                onChange={handleChange}
                required/>

                <input type="email" 
                name="email"
                placeholder={t("enquiry_form.placeholder_email")}
                value={formData.email}
                onChange={handleChange}
                required/>

                <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">{t("enquiry_form.select_course_default")}</option>
                    <option value="Basic Android Repair">{t("enquiry_form.course_options.0")}</option>
                    <option value="Advance Android Repair">{t("enquiry_form.course_options.1")}</option>
                    <option value="Complete iPhone Repair">{t("enquiry_form.course_options.2")}</option>
                </select>

                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t("enquiry_form.textarea_placeholder")}/>
                <button type="submit">{t("enquiry_form.submit_button")}</button>
            </form>
        </div>

        {/* /*{showPopup && (
            <div className="popup-overlay">
                <div className="popup-box">
                    <button className="popup-close" onClick={()=> setShowPopup(false)}>
                        x
                    </button>
                    <p className="popup-badge">{t("enquiry_form.popup.badge")}</p>
                    <h3>{t("enquiry_form.popup.title")}</h3>
                    <p>{t("enquiry_form.popup.body")}</p>
                    <button className="popup-button" onClick={()=>setShowPopup(false)}>
                       {t("enquiry_form.popup.cta")}
                    </button>
                </div>
            </div>
        )} */}
    </section>)
}