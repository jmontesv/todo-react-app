import React from "react";

function CheckInput({ label, name, onChange, isCheck }) {
  return (
    <>
      <label className="form-control__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-control__input"
        id={name}
        type="checkbox"
        name={name}
        checked={isCheck}
        onChange={onChange}
      />
    </>
  );
}

export default CheckInput;
