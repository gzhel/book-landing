import React from "react";

export const CounterAreaComponent = () => {
  return (
    <section className="counter-area mt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="single-counter">
              <h1 className="counter">6754</h1>
              <p>Total fans</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="single-counter">
              <h1 className="counter">1613</h1>
              <p>Book views</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="single-counter">
              <h1 className="counter">5</h1>
              <p>Total projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
