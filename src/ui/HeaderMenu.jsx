// import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
// import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-[0.8rem] ">
      <li className=" hover:bg-grey-100">
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser className="text-blue-700" />
        </ButtonIcon>
        {/* <HiOutlineUser className="text-blue-700" /> */}
      </li>
      {/* <li>
        <DarkModeToggle />
      </li> */}
      <li className=" hover:bg-grey-100">
        {/* <HiArrowRightOnRectangle className="text-blue-700" /> */}
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
