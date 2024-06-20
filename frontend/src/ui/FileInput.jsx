import React, { forwardRef } from "react";

const FileInput = forwardRef(({ id, accept, ...rest }, ref) => {
  return (
    <div className="relative inline-block">
      {/* <input
        type="file"
        id={id}
        accept={accept}
        ref={ref}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        {...rest}
      />
      <div className="font-inherit font-medium px-3 py-2 rounded-sm border-none bg-brand-600 text-brand-50 hover:bg-brand-700 transition duration-200">
        Choose file
      </div> */}

      <input
        type="file"
        id={id}
        accept={accept}
        ref={ref}
        className="text-sm rounded-md file:font-medium file:py-2 file:px-3 file:mr-3 file:rounded-md file:border-none file:text-white file:bg-blue-600 file:cursor-pointer file:transition-colors file:hover:bg-blue-700"
        {...rest}
      />
    </div>
  );
});

export default FileInput;
