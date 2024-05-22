//JSX Code

import picture from '../assests/img/hero-img.png'; // Tell webpack this JS file uses this image


console.log(picture); // /logo.84287d09.png

function Intro() {
    return  (
<section id="hero" className="hero section">
  
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
        <h1 className="">การบ้าน Mini Project 2024</h1>
        <p className="">ผมทำดีที่สุดแล้วครับอาจารย์</p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
        <img src={picture} className="img-fluid animated" alt="" />
      </div>
    </div>
  </div>

</section>);

   }
   export default Intro;
   
   