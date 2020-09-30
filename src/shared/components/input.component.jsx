import React from "react";
import classNames from "classnames";

export const Input = ({ ...props }) => {
  const {
    disabled,
    type,
    name,
    placeholder = "",
    required = false,
    className,
    icon,
  } = props;

  const inputClasses = icon && classNames(`icon--${icon}`);

  const inputComponent = (
    <>
      {icon && (
        <div className={"icon"}>
          <i className={inputClasses} />
        </div>
      )}
      <input
        type={type}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </>
  );

  return inputComponent;
};
