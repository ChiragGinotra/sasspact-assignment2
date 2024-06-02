import { NavLink } from "react-router-dom";

function CustomNavLink({ to, icon: Icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 text-grey-600 text-lg font-medium p-3 transition-all duration-300  ${
          isActive ? "bg-grey-50 text-grey-800" : "hover:bg-grey-50 "
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`w-6 h-6 transition-all duration-300 ${
              isActive ? "text-blue-500" : "text-grey-400"
            } ${!isActive ? "hover:text-blue-500" : ""}`}
          />
          <span>{children}</span>
        </>
      )}
    </NavLink>
  );
}

export default CustomNavLink;
