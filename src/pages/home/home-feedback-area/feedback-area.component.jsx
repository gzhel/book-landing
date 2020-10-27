import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FirstImage from "../../../shared/images/t1.png";
import SecondImage from "../../../shared/images/t2.png";
import ThirdImage from "../../../shared/images/t3.png";
import ForthImage from "../../../shared/images/t4.png";

export const FeedbackAreaComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <section className="feedback-area" id="home-info">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">What our Reader’s Say about us</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={FirstImage} alt="" />
                <p class="desc">
                  My book "Lord of the rings" is good, but book of this guy is
                  just awesome.
                </p>
                <h4>J. R. R. Tolkien</h4>
                <p>
                  Prose Writer, Historian, Linguist, Philologist, Translator
                </p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={SecondImage} alt="" />
                <p class="desc">
                  Throm-Ka. Bin mog g'thazag cha... Aka'Magosh!
                </p>
                <h4>Orc from Warcraft</h4>
                <p>Just orc</p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={ThirdImage} alt="" />
                <p class="desc">Meow... Mrrr (good book)</p>
                <h4>Kitty Cat</h4>
                <p>Cute cat</p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={ForthImage} alt="" />
                <p class="desc">Luke, if you see me... I am Your Father</p>
                <h4>Darth Vader</h4>
                <p>Father #1</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
