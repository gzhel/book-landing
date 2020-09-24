import React from "react";
import { HeaderComponent } from "../home/home-header/header.component";
import { FooterComponent } from "../home/home-footer/footer.component";

export const SpaLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};
