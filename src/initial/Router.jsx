import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
//import { Route } from "react-router";
import { HomePage } from "../pages/home/home.page";
import { SpaLayoutRouter } from "../pages/layouts/spa.router";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <SpaLayoutRouter exact path={"/"} component={HomePage} permitAll />
    </Switch>
  </BrowserRouter>
);

export default Router;
