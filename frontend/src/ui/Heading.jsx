import React from "react";
import clsx from "clsx";

function Heading({ as: Tag = "h1", className, children }) {
  const baseClasses = "line-height[1.4]";
  const tagClasses = {
    h1: "text-3xl font-semibold",
    h2: "text-2xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-3xl font-semibold text-center",
  };

  return (
    <Tag className={clsx(baseClasses, tagClasses[Tag], className)}>
      {children}
    </Tag>
  );
}

export default Heading;
