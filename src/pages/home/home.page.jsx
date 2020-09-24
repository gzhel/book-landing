import React from "react";
import { HomeHeaderComponent } from "./home-header/header.component";
import { BannerAreaComponent } from "./home-banner-area/banner-area.component";
import { InfoAreaComponent } from "./home-info-area/info-area.component";
import { FactAreaComponent } from "./home-fact-area/fact-area.component";
import { CounterAreaComponent } from "./home-counter-area/counter-area.component";
import { PriceAreaComponent } from "./home-price-area/price-area.component";
import { DownloadAppAreaComponent } from "./home-download-app-area/download-app-area.component";
import { FeedbackAreaComponent } from "./home-feedback-area/feedback-area.component";
import { HomeFooterComponent } from "./home-footer/footer.component";

export const HomePage = () => {
  return (
    <>
      <HomeHeaderComponent />
      <BannerAreaComponent />
      <InfoAreaComponent />
      <FactAreaComponent />
      <CounterAreaComponent />
      <PriceAreaComponent />
      <DownloadAppAreaComponent />
      <FeedbackAreaComponent />
      <HomeFooterComponent />
    </>
  );
};
