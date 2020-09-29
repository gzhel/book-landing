import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const Button = ({ ...props }) => {
  const { disabled, to, type, children, onClick } = props;

  const linkClasses = classNames("link", "link-icon", {
    disabled: type === "disabled",
    "link-default": type === "default",
    "link-success": type === "success",
    "link-info": type === "info",
    "link-warning": type === "warning",
    "link-danger": type === "danger",
  });

  const buttonClasses = classNames("btn", {
    disabled: type === "disabled",
    "btn-default": type === "default",
    "btn-success": type === "success",
    "btn-info": type === "info",
    "btn-warning": type === "warning",
    "btn-danger": type === "danger",
    "btn-link": type === "link",
  });

  const buttonComponent = to ? (
    <Link to={to} className={linkClasses} disabled={disabled}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );

  return buttonComponent;
};
