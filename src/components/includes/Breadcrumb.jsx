import React, { useState } from 'react'
import PageDetails from './../../data/PageDetails';

const Breadcrumb = ({page}) => {
  const [pgDeails] = useState(PageDetails);

  function breadDetails(pageInfo, page) {
    if (pageInfo.id === page) {
      return (
        <div className="ap-bread-wrapper" key={pageInfo.id}>
          <div className="bread-page-title">
            <h1 className='ap-h1'>{pageInfo.pageTitle}</h1>
          </div>
          <div className="bread-page-location">
            <ul className="bread-list" role="menu">
              <li className="bread-section" role="presentation">
                <a href="/" role="menuitem"> HOME </a>
              </li>
              <li className="bread-section" role="presentation">
                <a href={pageInfo.url} role="menuitem"> {pageInfo.pageTitle} </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className="ap-breadcrumb">
      <div className="container">
        {pgDeails.map( (pageInfo) => (
          breadDetails(pageInfo, page)
        ))}
      </div>
    </div>
  )
}

export default Breadcrumb