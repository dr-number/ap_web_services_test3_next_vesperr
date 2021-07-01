import React from "react";
import Image from 'next/image';

class Clients extends React.Component{

  render() {

    return <section id="clients" className="clients clients">
      <div className="container">

        <div className="row">

          {this.props.imgs.map(
              (img, index) =>

                <div key={index} className="col-lg-2 col-md-4 col-6">
                  <Image src={img} width={img.width} height={img.height}
                       className="img-fluid aos-init aos-animate" alt=""
                       data-aos="zoom-in" data-aos-delay={index + "00"} />
                </div>
            )
          }

        </div>
      </div>
    </section>
  }
}

export default Clients;
