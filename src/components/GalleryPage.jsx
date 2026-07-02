import Stack from './Stack'
import Navbar from './Navbar'
import Footer from './Footer'
export default function GalleryPage (){
   const images = [
  "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978205/image1_imz9vh.heic",
  "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978201/image2_kgvlbi.heic",

  "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978202/image3_y5wt1y.heic",
  "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978206/image4_xsxpr1.heic",
  // "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978206/image5_ztmuhv.heic",
//   "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978207/image6_ymdayk.heic",
//   "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978208/image7_t4ojml.heic",
//   "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978212/image8_avjfts.heic",
//   "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978201/image_9_yyezmh.heic",
// "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978211/image10_yndcue.heic",
// "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978214/image11_frfjae.heic",
// "https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978215/image12_xybdcm.heic",




];
 return(
    <div className="Gallery-container">
        <Navbar />
<div className="Gallery-section">
<div className="Gallery-content">
<h2>Our Gallery</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, hic.</p>
</div>
<div className="Gallery-image-container"style={{ width: 500, height: 500 }}>
  <Stack
    randomRotation={false}
    sensitivity={200}
    sendToBackOnClick={true}
    cards={images.map((src, i) => (
      <img 
        key={i} 
        src={src} 
        alt={`card-${i + 1}`} 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
      />
    ))}
    autoplay={false}
    autoplayDelay={3000}
    pauseOnHover={false}
/>


</div>


</div>
<Footer />
</div>
    )
}
