import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FirstImage from "../../../shared/images/t1.png";

export const FeedbackAreaComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <section className="feedback-area">
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
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware and more. laptop accessory
                </p>
                <h4>Mark Alviro Wiens</h4>
                <p>CEO at Google</p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={FirstImage} alt="" />
                <p class="desc">
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware and more. laptop accessory
                </p>
                <h4>Mark Alviro Wiens</h4>
                <p>CEO at Google</p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={FirstImage} alt="" />
                <p class="desc">
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware and more. laptop accessory
                </p>
                <h4>Mark Alviro Wiens</h4>
                <p>CEO at Google</p>
              </div>
            </div>
            <div class="slider-item-layout">
              <div class="single-testimonial item">
                <img class="mx-auto" src={FirstImage} alt="" />
                <p class="desc">
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware and more. laptop accessory
                </p>
                <h4>Mark Alviro Wiens</h4>
                <p>CEO at Google</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
