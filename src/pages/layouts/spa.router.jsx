import React from "react";
import { SpaLayout } from "./spa.layout";
import { Route } from "react-router-dom";

export const SpaLayoutRouter = ({ component: Component, ...rest }) => {
  const renderFunction = (matchProps) => (
    <SpaLayout>
      <Component {...matchProps} />
    </SpaLayout>
  );

  return <Route {...rest} render={renderFunction} />;
};
