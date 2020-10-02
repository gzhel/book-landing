import React from "react";
import { BannerAreaComponent } from "./home-banner-area/banner-area.component";
import { CounterAreaComponent } from "./home-counter-area/counter-area.component";
import { DownloadAppAreaComponent } from "./home-download-app-area/download-app-area.component";
import { FactAreaComponent } from "./home-fact-area/fact-area.component";
import { FeedbackAreaComponent } from "./home-feedback-area/feedback-area.component";
import { InfoAreaComponent } from "./home-info-area/info-area.component";
import { PriceAreaComponent } from "./home-price-area/price-area.component";

export const HomePage = () => {
  return (
    <>
      <BannerAreaComponent />
      <InfoAreaComponent />
      <FactAreaComponent />
      <CounterAreaComponent />
      <PriceAreaComponent />
      <DownloadAppAreaComponent />
      <FeedbackAreaComponent />
    </>
  );
};
