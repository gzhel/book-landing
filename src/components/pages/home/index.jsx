import React from "react";
import Header from "./header/index";
import BannerArea from "./banner-area/index";
import InfoArea from "./info-area/index";
import FactArea from "./fact-area/index";
import CounterArea from "./counter-area/index";
import PriceArea from "./price-area/index";
import DownloadAppArea from "./download-app-area/index";
import FeedbackArea from "./feedback-area/index";
import Footer from "./footer/index";

const HomePage = () => {
  return (
    <>
      <Header />
      <BannerArea />
      <InfoArea />
      <FactArea />
      <CounterArea />
      <PriceArea />
      <DownloadAppArea />
      <FeedbackArea />
      <Footer />
    </>
  );
};

export default HomePage;
