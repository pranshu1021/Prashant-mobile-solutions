import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import './Aboutus.css';
import { useTranslation } from "react-i18next";

function Aboutus() {
    const {t}=useTranslation();
    return(
        <>
        <Navbar />
<div className="aboutus">
    
<div className="Hero-aboutus">
<h1>{t("about.page_title")}</h1>
<p>{t("about.hero_paragraph")}</p>
</div>

<div className="story-aboutus">
    <h3>{t("about.our_story_heading")}</h3>
    <p>{t("about.our_story_paragraphs.0")}</p>
<p>{t("about.our_story_paragraphs.1")}</p>

</div>
<div className="Mission-aboutus">
<h3>{t("about.mission_heading")}</h3>
<p>{t("about.mission_paragraph")}</p>

</div>
<div className="Vision-aboutus">
<h3>{t("about.vision_heading")}</h3>
<p>{t("about.vision_paragraph")}</p>

</div>
<div className="Offer-aboutus">
    <h3>{t("about.offer_heading")}</h3>
<ul>
<li>{t("about.offer_list.0")}</li>
<li>{t("about.offer_list.1")}</li>
<li>{t("about.offer_list.2")}</li>
<li>{t("about.offer_list.3")}</li>

</ul>
</div>
<div className='Whyus-aboutus'>
<h3>{t("about.why_heading")}</h3>
<ul>
<li>{t("about.why_list.0")}</li>
<li>{t("about.why_list.1")}</li>
<li>{t("about.why_list.2")} </li>
<li>{t("about.why_list.3")}</li>
<li>{t("about.why_list.4")}</li>
<li>{t("about.why_list.5")}</li>
</ul>
</div>
<div className='Journey-aboutus'>
  <h3>{t("about.journey_heading")}</h3>  
    
    <p>{t("about.journey_paragraph")}</p>

</div>








</div>
<Footer />
</>
    )
}


export default Aboutus;