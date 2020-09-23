import React from "react";

const BannerArea = () => {
  const bookPrice = 9.99;

  return (
    <section className={"banner-area"}>
      <div className="container">
        <div className="center-in-container">
          <div className="layout-of-banner-content">
            <h5>Author: Gregory Zhelyabin</h5>
            <h1>Project T</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ducimus at suscipit tempore magni aliquam esse veniam voluptatem
              porro sit, placeat, doloribus quasi commodi voluptatibus.
              Accusantium necessitatibus ratione ut suscipit.
            </p>
            <button>Buy now for {bookPrice}$</button>
          </div>
          <div className="banner-right">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
