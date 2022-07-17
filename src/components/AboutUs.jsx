import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const AboutUs = () => {
  useEffect( () => {
    document.title = "About Us"
  });
  const pageId = 1;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <div className="ap-about">
        <div className="ap-about-info">
          <div className="container">
            <h1 className='ap-h1 dash-text'>About Us</h1>
            <p>
            We are a team of designers, developers, marketing experts and <br /> networking experts with a diverse skillset and vast experience across several industries.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="ap-about-record">
          <div className="container">
            <div className="about-record-wrapper">
              <h2 className='ap-h2 dash-text ap-head'>Our Track Record</h2>
              <div className="row ap-record-group">
                <div className="col-md-3">
                  <div className="ap-record-item ap-box">
                    <div className="record-img">
                      <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                    </div>
                    <div className="record-detail">
                      <div className="record-count">
                        9 <span>+</span>
                      </div>
                      <div className="record-title">
                        Years
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ap-record-item ap-box">
                    <div className="record-img">
                      <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                    </div>
                    <div className="record-detail">
                      <div className="record-count">
                        9 <span>+</span>
                      </div>
                      <div className="record-title">
                        Years
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ap-record-item ap-box">
                    <div className="record-img">
                      <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                    </div>
                    <div className="record-detail">
                      <div className="record-count">
                        9 <span>+</span>
                      </div>
                      <div className="record-title">
                        Years
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ap-record-item ap-box">
                    <div className="record-img">
                      <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                    </div>
                    <div className="record-detail">
                      <div className="record-count">
                        9 <span>+</span>
                      </div>
                      <div className="record-title">
                        Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="about-record-info-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="record-info-group">
                    <h3 className="ap-h3">Heading h3</h3>
                    <div className="record-text">
                      <p className='ap-p'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, hic.
                      </p>
                      <ul className='ap-list'>
                        <li className="ap-list-item">Lorem ipsum dolor sit.</li>
                        <li className="ap-list-item">Lorem ipsum dolor sit.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="record-info-group">
                    <h3 className="ap-h3">Heading h3</h3>
                    <div className="record-text">
                      <p className='ap-p'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, hic.
                      </p>
                      <p className='ap-p'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, hic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs