import React from 'react'
import bannerImage from './../../public/assets/images/banner.png';
import svgComputer from './../../public/assets/svg/computer-icon.svg';
const Main = () => {
  return (
    <div className="ap-main">
      <div className="main-overview">
        <smart-image className='smart-image' alt="banner image" mode="cover" style={{backgroundImage: `url(${bannerImage})`}}></smart-image>
        <div className='ap-content conteiner-fluid'>
          <div className='ap-content-wrapper'>
            <h1 className='ap-h1 '>Build Intelligent Apps</h1>
            <p className='ap-p ap-m4'>We help add value through technology, <br/> custom built for your needs.</p>
            <a href='#' className='ap-btn-primary ap-link'>Contact Us Now</a>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="ap-about-overview">
        <div className="ap-content container">
          <div className="ap-content-wrapper">
            <h2 className='ap-h2 dash-text'>What we do</h2>
            <p className='ap-p ap-m4'>
              We build affordable technology solutions for businesses, large & small. By applying modern design principles along with the latest in mobile & web technologies, we create tailored solutions that add value by connecting people with each other, businesses with their customers, and decision makers with valuable information, while simplifying business processes, accelerating production, and lowering costs.
            </p>
          </div>
          <div className="ap-empty-3"></div>
          <div className="container ap-content-info">
            <div className="d-flex mr-2 w-100">
              <div className="ap-info_item">
                <img src={svgComputer} alt="informantion" />
                <p>
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main