import React from "react";

function FormControl({ align, direction, children }) {
  let className = "form-control";
  if (direction === "vertical") className += " form-control--col";
  if (align === "center") className += " form-control--center";
  return <div className={className}>{children}</div>;
}

export default FormControl;
