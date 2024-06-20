import React from "react";
import classNames from "classnames";

function Select({ options, value, onChange, type }) {
  const selectClass = classNames(
    "text-sm p-2 border rounded shadow-sm font-medium",
    {
      "border-gray-100": type === "white",
      "border-gray-300": type !== "white",
      "bg-gray-50": true,
    }
  );

  return (
    <select value={value} onChange={onChange} className={selectClass}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
