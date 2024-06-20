import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variation, size, ...props }) => {
  const sizeClass = {
    small: "text-xs px-2 py-1 font-semibold uppercase",
    medium: "text-base px-4 py-2 font-medium",
    large: "text-lg px-6 py-3 font-medium",
  }[size];

  const variationClass = {
    primary: "text-white bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-grey-100 border border-grey-200 hover:bg-grey-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  }[variation];

  return (
    <button
      className={` rounded-lg ${sizeClass} ${variationClass} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
