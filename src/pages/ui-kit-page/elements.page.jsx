import React from "react";
import { ElementsBannerAreaComponent } from "./elements-banner-area/banner-area.component";
import { SampleButtonsComponent } from "./elements-buttons-area/buttons-area.component";

export const ElementsPage = () => {
  return (
    <>
      <ElementsBannerAreaComponent />
      <SampleButtonsComponent />
      {/* 
        <FactAreaComponent />
        <CounterAreaComponent />
        <PriceAreaComponent />
        <DownloadAppAreaComponent />
        <FeedbackAreaComponent /> */}
    </>
  );
};
