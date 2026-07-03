import Stack from './Stack'
import Navbar from './Navbar'
import Footer from './Footer'
import './GalleryPage.css'

export default function GalleryPage() {
  const images = [
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978205/image1_imz9vh.heic',
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978201/image2_kgvlbi.heic',
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978202/image3_y5wt1y.heic',
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978206/image4_xsxpr1.heic',
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978206/image5_ztmuhv.heic',
    'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978207/image6_ymdayk.heic',
    /*'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978208/image7_t4ojml.heic',*/
    /*'https://res.cloudinary.com/dduglrbdj/image/upload/f_auto,q_auto/v1782978212/image8_avjfts.heic'*/
  ]

  return (
    <div className="gallery-page">
      <Navbar />

      <main className="gallery-section">
        <div className="gallery-copy">
          <span className="gallery-eyebrow">Crafted work, captured in detail</span>
          <h2>Our Gallery</h2>
          <p>
            A glimpse into the care, precision, and craftsmanship that shape every
            repair, service, and customer experience we deliver.
          </p>

          <div className="gallery-highlights">
            <span>Trusted service</span>
            <span>Detail-focused work</span>
            <span>Real customer moments</span>
          </div>
        </div>

        <div className="gallery-image-shell">
          <div className="gallery-image-container">
            <Stack
              randomRotation={true}
              sensitivity={350}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`card-${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ))}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={false}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
