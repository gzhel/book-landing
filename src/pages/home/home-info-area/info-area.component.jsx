import React from "react";
import InfoPhotoImage from "./../../../shared/images/about-img.jpg";

export const InfoAreaComponent = () => {
  return (
    <section className={"section-gap info-area"} id="home-about">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Some information about me</h1>
              <p>
                I am not only a professional IT developer, but also a very
                creative person.
              </p>
            </div>
          </div>
        </div>
        <div className="single-info row mt-40 align-items-center">
          <div className="col-lg-6 col-md-12 text-center no-padding info-left">
            <img
              src={InfoPhotoImage}
              width={600}
              height={600}
              alt="Info"
              data-aos="fade"
              data-aos-duration="800"
            />
          </div>
          <div className="col-lg-6 col-md-12 no-padding info-right">
            <div
              className="info-content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2 className="pb-30">Gregory Zhelyabin</h2>
              <p>
                I was born in Rostov-on-don, Russia. I only started getting
                interested in IT and programming in high school, when I was 18
                years old. At the age of 20, I got my first job in IT with
                minimal knowledge of HTML and CSS. After that, I improved my
                skills in the shortest possible time, and also learned the
                basics of JavaScript, TypeScript and React.
              </p>
              <p>
                Despite not having much experience in programming, I try to pay
                attention to small things. A good result for me is one in which
                there are no open questions. In addition to IT, I am interested
                in creating video games, designing game worlds, characters, and
                scenarios. I love good movies, and I can easily distinguish a
                good product from a bad one, as well as a good UI/UX from a bad
                one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
