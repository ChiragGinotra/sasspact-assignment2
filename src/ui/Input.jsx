import React from "react";

// const Input = ({ ...props }) => {
//   return (
//     <input
//       {...props}
//       className={`w-full border border-grey-300 bg-grey-0 rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 }`}
//     />
//   );
// };

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`w-full border border-grey-300 bg-grey-0 rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 }`}
    />
  );
});

export default Input;
