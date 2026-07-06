import Navbar from "./Navbar";
import Footer from "./Footer";
import './Comingsoon.css';
import {useTranslation} from "react-i18next"
function Comingsoon (){
    const{t}=useTranslation();
    return(
<>
<div className="Comingsoonpage">
    <Navbar />
    <div className="Comingsooncontainer">
<div className="Comingsooncontent">
<h1>{t("coming_soon.heading")} </h1>
<p> {t("coming_soon.intro")} </p>
<p>{t("coming_soon.details")} </p>
<p className="Heading">{t("coming_soon.team_signature")} </p>
</div>
</div>
<Footer />
</div>
</>
    )
}


export default Comingsoon;