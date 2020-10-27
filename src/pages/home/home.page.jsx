import React from "react";
import { BannerAreaComponent } from "./home-banner-area/banner-area.component";
import { CounterAreaComponent } from "./home-counter-area/counter-area.component";
import { FeedbackAreaComponent } from "./home-feedback-area/feedback-area.component";
import "./home-header/_header.styles.scss";
import { InfoAreaComponent } from "./home-info-area/info-area.component";

export const HomePage = () => {
  return (
    <>
      <BannerAreaComponent />
      <CounterAreaComponent />
      <InfoAreaComponent />
      <FeedbackAreaComponent />
      {/* <SeeWorkshopAreaComponent /> */}
    </>
  );
};
