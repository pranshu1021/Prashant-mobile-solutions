import {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import "./EnquiryForm.css"

export default function EnquiryForm(){
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        email: "",
        course:"",
        message:"",
    });

    const [showPopup,setShowPopup] = useState(false);
    
    useEffect(()=>{
        setShowPopup(true);
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
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            formData
        )
        .then(()=>{
            alert("Enquiry is sent to your email successfully!!");
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
                <p className="enquiry-tag">BOOK A COURSE</p>
                <h2>Start your mobile repair journey with us.</h2>
                <p>Share your details and our team will guide you toward the best course for your goals.</p>
            </div>

            <form className="enquiry-form" >
                <input type="text" 
                placeholder="Enter your name"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required />

                <input type="tel" 
                name="phone" 
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required/>

                <input type="email" 
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required/>

                <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select your course</option>
                    <option value="Basic Android Repair">Basic Android Repair</option>
                    <option value="Advance Android Repair">Advance Android Repair</option>
                    <option value="Complete iPhone Repair">Complete iPhone Repair</option>
                </select>

                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..."/>
                <button type="submit">Submit Enquiry</button>
            </form>
        </div>

        {showPopup && (
            <div className="popup-overlay">
                <div className="popup-box">
                    <button className="popup-close" onClick={()=> setShowPopup(false)}>
                        x
                    </button>
                    <p className="popup-badge">Welcome to PMS</p>
                    <h3>Prashant Mobile Solutions</h3>
                    <p>Explore expert mobile repair courses, get guidance, also book your first lesson with us.</p>
                    <button className="popup-button" onClick={()=>setShowPopup(false)}>
                        Let's Begin
                    </button>
                </div>
            </div>
        )}
    </section>)
}