import React from 'react'

const Email = () => {
  return (
    <div className='ap-contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form method="post">
              <div className="form-main-wrapper">
                <div className="ap-group-wrapper contact-user-detail row">
                  <div className="ap-form-group col-md-4">
                    <label htmlFor="fullName" className='ap-form-label'>Full Name <span className='ap-danger'>*</span></label>
                    <input type="text" name="fullName" id="fullName" />
                  </div>
                  <div className="ap-form-group col-md-4">
                    <label htmlFor="emailAddress" className='ap-form-label'>Email Address <span className='ap-danger'>*</span></label>
                    <input type="text" name="emailAddress" id="emailAddress" />
                  </div>
                  <div className="ap-form-group col-md-4">
                    <label htmlFor="phoneNumber" className='ap-form-label'>Phone Number <span className='ap-danger'>*</span></label>
                    <input type="text" name="phoneNumber" id="phoneNumber" />
                  </div>
                </div>
                <div className="ap-group-wrapper">
                  <div className="ap-form-group">
                    <label htmlFor="projectBrief" className='ap-form-label'>Project Brief <span className='ap-danger'>*</span></label>
                    <textarea name="projectBrief" id="projectBrief" rows="7"></textarea>
                  </div>
                </div>
                <div className="ap-group-wrapper">
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="form-main-wrapper">
              <div className="ap-group-wrapper contact-company-detail">
                <div className="ap-form-group">
                  <div className="ap-info-icon">
                    <a href="" className="ap-icon-wrapper">
                      <div className="">
                        <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                      </div>
                    </a>
                  </div>
                  <div className="ap-info-content">
                    <label className='ap-info-label'>Telephone</label>
                    <p className='ap-info-detail'> <a href="tel:#" target="_blank" rel="noopener noreferrer">+977 01-XXXXXX</a></p>
                  </div>
                </div>
                <div className="ap-form-group">
                  <div className="ap-info-icon">
                    <a href="" className="ap-icon-wrapper">
                      <div className="">
                        <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                      </div>
                    </a>
                  </div>
                  <div className="ap-info-content">
                    <label className='ap-info-label'>Mobile</label>
                    <p className='ap-info-detail'> <a href="tel:#" target="_blank" rel="noopener noreferrer">+977 01-XXXXXX</a></p>
                    <p className='ap-info-detail'> <a href="tel:#" target="_blank" rel="noopener noreferrer">+977 01-XXXXXX</a></p>
                  </div>
                </div>
                <div className="ap-form-group">
                  <div className="ap-info-icon">
                    <a href="" className="ap-icon-wrapper">
                      <div className="">
                        <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                      </div>
                    </a>
                  </div>
                  <div className="ap-info-content">
                    <label className='ap-info-label'>Email Us</label>
                    <p className='ap-info-detail'> <a href="mailto:#" target="_blank" rel="noopener noreferrer">info@companyname.com</a></p>
                  </div>
                </div>
                <div className="ap-form-group">
                  <div className="ap-info-icon">
                    <a href="" className="ap-icon-wrapper">
                      <div className="">
                        <img src={process.env.PUBLIC_URL+"/assets/svg/info-icon.svg"} alt="icon" srcSet="" />
                      </div>
                    </a>
                  </div>
                  <div className="ap-info-content">
                    <label className='ap-info-label'>Location</label>
                    <p className='ap-info-detail'> <a href="#" target="_blank" rel="noopener noreferrer">info@companyname.com</a></p>
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

export default Email