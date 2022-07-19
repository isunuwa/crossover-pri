import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const Service = () => {
  useEffect( () => {
    document.title = "Servies"
  });

  const pageId = 3;

  // other service 
  function OtherService() {
    return(
      <div className="ap-other-service">
        <div className="containera">
          <h1 className="ap-h1 dash-text">Other Services</h1>
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
      </div>
    );
  }

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <OtherService />
    </div>
  )
}

export default Service