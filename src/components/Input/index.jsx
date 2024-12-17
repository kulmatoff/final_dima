import { useState } from "react";
import "./index.css";

export function Input(props) {
  const {
    danger,
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    children,
  } = props;

  const labelClassName = `input--label ${danger ? "label--danger" : ""}`;
  const className = `input ${danger ? "input--danger" : ""}`;

  return (
    <div className="input--element">
      <label htmlFor="inp" className={labelClassName}>
        {label}
      </label>
      <br />
      <input
        id="inp"
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      >
        {children}
      </input>
    </div>
  );
}
