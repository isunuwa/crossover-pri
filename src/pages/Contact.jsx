import React, { useEffect } from 'react'
import Breadcrumb from './../components/includes/Breadcrumb';
import Email from './../components/layouts/Email';

const Contact = () => {
  useEffect( () => {
    document.title = "Contact Us"
  });

  const pageId = 2;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <div className="ap-contactus">
        <div className="ap-contact-info">
          <div className="container">
            <h1 className="ap-h1 dash-text">Got a project? Talk to an expert.</h1>
            <p className="ap-p">
              Give us a call, write an email or fill out the form below.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="ap-contact-mail">
          <div className="container">
            <Email />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact