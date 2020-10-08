import React from "react";
import HeaderImage from "./../../../shared/images/header-img.png";
import "./background-banner.styles.css";

export const BannerAreaComponent = () => {
  const bookPrice = 5.99;

  return (
    <section className="banner-area background-banner">
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-start height-1008">
          <div className="banner-content col-lg-7">
            <h5 className="text-white text-uppercase">
              Author: Gregory Zhelyabin
            </h5>
            <h1 className="text-uppercase">Project T</h1>
            <p className="text-white pt-20 pb-20 desc-half-transp-bg">
              A new fantasy universe inspired by such series as the Lord of the
              rings, the Witcher, the God of War, and Dark Souls. The story
              connects the fate of.
            </p>
            <button className="primary-btn text-uppercase">
              Buy now for {bookPrice}$
            </button>
          </div>
          <div className="col-lg5 banner-right">
            <img className="img-fluid" src={HeaderImage} alt="Book" />
          </div>
        </div>
      </div>
    </section>
  );
};
