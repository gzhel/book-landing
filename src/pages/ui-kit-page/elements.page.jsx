import React from "react";
import { ElementsBannerAreaComponent } from "./elements-banner-area/banner-area.component";
import { SampleButtonsComponent } from "./elements-buttons-area/buttons-area.component";
import { WholeWrapComponent } from "./elements-whole-wrap/elements-wrap.component";

export const ElementsPage = () => {
  return (
    <>
      <ElementsBannerAreaComponent />
      <SampleButtonsComponent />
      <WholeWrapComponent />
      {/* 
        <FactAreaComponent />
        <CounterAreaComponent />
        <PriceAreaComponent />
        <DownloadAppAreaComponent />
        <FeedbackAreaComponent /> */}
    </>
  );
};
