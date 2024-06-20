import CustomNavLink from "./CustomNavLink";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  // HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <CustomNavLink to="/dashboard" icon={HiOutlineHome}>
            Home
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/posts" icon={HiOutlineCalendarDays}>
            Posts
          </CustomNavLink>
        </li>

        <li>
          <CustomNavLink to="/users" icon={HiOutlineUsers}>
            Users
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/account" icon={HiOutlineCog6Tooth}>
            Settings
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
