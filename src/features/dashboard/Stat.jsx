import React from "react";

function Stat({ icon, title, value, color }) {
  const bgColorClass = `${color ? `bg-${color}-100` : ""}`;
  const textColorClass = `${color ? `text-${color}-700` : ""}`;
  // console.log(bgColorClass, textColorClass);

  return (
    <div className="bg-grey-0 border border-grey-100 rounded-lg p-[1rem] grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div
        className={` row-span-full aspect-square rounded-full flex items-center justify-center  ${bgColorClass}`}
      >
        <span className={` ${textColorClass}`}>{icon}</span>
      </div>
      <h5 className="self-end text-xs uppercase tracking-wide font-semibold text-grey-500">
        {title}
      </h5>
      <p className="lg:text-xl xl:text-2xl leading-none font-semibold">
        {value}
      </p>
    </div>
  );
}

export default Stat;
