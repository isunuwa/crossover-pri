import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ page }) => {
  function BreadDetails() {
    return (
      <div className="ap-bread-wrapper">
        <div className="bread-page-title">
          <h1 className="ap-h1">Page Title</h1>
        </div>
        <div className="bread-page-location">
          <ul className="bread-list" role="menu">
            <li className="bread-section" role="presentation">
              <Link to="/" role="menuitem">
                HOME
              </Link>
            </li>
            <li className="bread-section" role="presentation">
              <Link to="/" role="menuitem">
                PAGE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="ap-breadcrumb">
      <div className="container">
        {/* {pgDetails.map((pageInfo) => breadDetails(pageInfo, page))} */}
        <BreadDetails />
      </div>
    </div>
  );
};

export default Breadcrumb;
