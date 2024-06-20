import React from "react";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="border border-grey-100 bg-grey-0 shadow-sm rounded-md p-1 flex gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={classNames(
            " border-none rounded-md font-medium text-sm py-1 px-2 transition-colors duration-300 ",
            {
              "bg-brand-600 text-brand-50": option.value === currentFilter,
              "bg-grey-0": option.value !== currentFilter,
              "hover:bg-brand-600 hover:text-brand-50":
                option.value !== currentFilter,
            }
          )}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
