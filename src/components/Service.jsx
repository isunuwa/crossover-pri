import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const Service = () => {
  useEffect( () => {
    document.title = "Servies"
  });

  const pageId = 3;

  function ServiceInfo() {
    return(
      <div className="service-info">
        <div className="container">
          <div className="ap-h1 dash-text">What we so</div>
          <p className='ap-p'>
            We created an IT-oriented company to improve the quality and availability of services. We promise to provide simpler, more organized, and more responsive services. Here he appears in the picture, where we become indispensable in his hands.</p>
          <p>
          As a software company, we promise you the experience and unremitting service you need, and understanding your goals is the first step in achieving these goals. Understanding your business, culture, and needs is our challenge.
          </p>
        </div>
      </div>
    );
  }

  function MoreService(){
    return(
      <div className="others-content">
        <div className="container">
          <h1 className="ap-h1 dash-text dash-left">Other Services</h1>
          <div className="cont-op">
            <div className="col-left cont-col">
              <div className="other-item">
                <div className="other-item-wrapper ap-box">
                  <div className="other-banner">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                  <div className="other-desc">
                    <h3 className="ap-h3">Lorem ipsum dolor sit.</h3>
                    <p className="ap-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="other-item">
                <div className="other-item-wrapper ap-box">
                  <div className="other-banner">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                  <div className="other-desc">
                    <h3 className="ap-h3">Lorem ipsum dolor sit.</h3>
                    <p className="ap-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* partation */}
            <div className="col-right cont-col">
              <div className="other-item">
                <div className="other-item-wrapper ap-box">
                  <div className="other-banner">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                  <div className="other-desc">
                    <h3 className="ap-h3">Lorem ipsum dolor sit.</h3>
                    <p className="ap-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="other-item">
                <div className="other-item-wrapper ap-box">
                  <div className="other-banner">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                  <div className="other-desc">
                    <h3 className="ap-h3">Lorem ipsum dolor sit.</h3>
                    <p className="ap-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  function Service() {
    return(
      <div className="containera">
        <h1 className="ap-h1 dash-text">Our Ken</h1>
        <div className="other-wrapper">
          <div className="service-row">
            <div className="container">
              <div className="row">
                <div className="col-md-5 service-col">
                  <div className="other-image">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="other-desc">
                    <h2 className='ap-h2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='ap-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ducimus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-row">
            <div className="container">
              <div className="row">
                <div className="col-md-5 service-col">
                  <div className="other-image">
                    <img src={process.env.PUBLIC_URL+"/assets/images/banner.png"} alt="service icon" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="other-desc">
                    <h2 className='ap-h2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='ap-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ducimus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <div className="ap-other-service">
        <ServiceInfo />
        <Service />
        <MoreService />
      </div>
    </div>
  )
}

export default Service