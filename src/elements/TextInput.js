import React from "react";

function TextInput({ placeholder, name, onChange, label, direction, value }) {
  let className = "form-control__label";
  if (direction === "vertical") className += " form-control__label--marginb";

  return (
    <>
      <label className={className} htmlFor={name}>
        {label}
      </label>
      <input
        className="form-control__input"
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;
