import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const Button = ({ ...props }) => {
  const { disabled, to, type, children, onClick, circled, arrow } = props;

  const linkClasses = classNames("link", "link-icon", {
    disabled: disabled,
    circled: circled,
    "link-default": type === "default",
    "link-success": type === "success",
    "link-info": type === "info",
    "link-warning": type === "warning",
    "link-danger": type === "danger",
  });

  const buttonClasses = classNames("btn", {
    disabled: disabled,
    circled: circled,
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
      {arrow && <span class="lnr lnr-arrow-right" />}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
      {arrow && <span class="lnr lnr-arrow-right" />}
    </button>
  );

  return buttonComponent;
};
