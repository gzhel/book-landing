import React from "react";
import classNames from "classnames";

export const Select = ({ data = [], icon, onChange, value, ...props }) => {
  const inputClasses = icon && classNames(`icon--${icon}`);

  const selectComponent = (
    <>
      {icon && (
        <div className={"icon"}>
          <i className={inputClasses} />
        </div>
      )}
      <select {...props}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );

  return selectComponent;
};
