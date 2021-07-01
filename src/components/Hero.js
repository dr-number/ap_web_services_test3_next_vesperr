import React from "react";
import  heroImg from "../assets/img/hero-img.png";

class Hero extends React.Component{
  render() {
    return <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" className="aos-init aos-animate">Grow your business with Vesperr</h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">We are team of talented
              designers making websites with Bootstrap</h2>
            <div data-aos="fade-up" data-aos-delay="800" className="aos-init aos-animate">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left"
               data-aos-delay="200">
            <img src={heroImg} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

    </section>
  }
}

export default Hero;
