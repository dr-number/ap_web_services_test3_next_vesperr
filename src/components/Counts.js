import React from "react";
import imgCounts from "../assets/img/counts-img.svg";

class Counts extends React.Component {

  render() {
    return <section id="counts" className="counts">
      <div className="container">

        <div className="row">
          <div
            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start aos-init aos-animate"
            data-aos="fade-right" data-aos-delay="150">
            <img src={imgCounts} alt="" className="img-fluid" />
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0 aos-init aos-animate" data-aos="fade-left"
               data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">

                {
                  this.props.data.map(
                    (item, index) =>

                      <div key={index} className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className={item.iconClass} />
                          <span data-purecounter-start="0" data-purecounter-end={item.pureCounter}
                                data-purecounter-duration="0"
                                className="purecounter">{item.pureCounter}</span>
                          <p>{item.text}</p>
                        </div>
                      </div>
                  )
                }

              </div>
            </div>
             {/*End .content*/}
          </div>
        </div>

      </div>
    </section>
  }
}

export default Counts;
