import React from "react";
import classNames from "classnames";

const Row = ({ children, type }) => {
  const rowClasses = classNames({
    flex: true,
    "justify-between items-center": type === "horizontal",
    "flex-col gap-4": type === "vertical",
  });

  return <div className={rowClasses}>{children}</div>;
};

Row.defaultProps = {
  type: "vertical",
};

export default Row;
