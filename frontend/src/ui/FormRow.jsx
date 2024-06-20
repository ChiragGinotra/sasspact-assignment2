import React from "react";

function FormRow({
  label,
  error,
  children,
  isButtonRow = false,
  isFirst = false,
  isLast = false,
}) {
  return (
    <div
      className={`${
        isButtonRow
          ? "flex justify-end gap-[1.2rem]"
          : "grid  grid-cols-[10rem_1fr] lg:grid-cols-[10rem_1fr_1fr] xl:grid-cols-[18rem_1.5fr_1.2fr] items-center gap-[2.4rem]"
      } py-[1rem] ${isFirst ? "pt-0" : ""} ${
        isLast ? "pb-0" : "border-b border-grey-100"
      }`}
    >
      {label && !isButtonRow && (
        <label htmlFor={children.props?.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && !isButtonRow && (
        <span className="text-sm text-red-700">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
