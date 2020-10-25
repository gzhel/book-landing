import React from "react";
import InfoPhotoImage from "./../../../shared/images/about-img.jpg";

export const InfoAreaComponent = () => {
  return (
    <section className={"section-gap info-area"} id="home-about">
      <div className="container">
        <div className="single-info row mt-40 align-items-center">
          <div className="col-lg-6 col-md-12 text-center no-padding info-left">
            <img src={InfoPhotoImage} alt="Info" />
          </div>
          <div className="col-lg-6 col-md-12 no-padding info-right">
            <div
              className="info-content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2 className="pb-30">Gregory Zhelyabin</h2>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards – especially in the
                workplace. That’s why it’s crucial that, as women.
              </p>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards – especially in the
                workplace. That’s why it’s crucial that, as women. inappropriate
                behavior is often laughed off as “boys will be boys,” women face
                higher conduct standards – especially in the workplace. That’s
                why it’s crucial that, as women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
