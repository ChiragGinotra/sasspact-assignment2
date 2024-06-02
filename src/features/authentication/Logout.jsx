import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
// import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router";

function Logout() {
  // const { logout, isLoading } = useLogout();
  const navigate = useNavigate();

  return (
    <ButtonIcon onClick={() => navigate("/login")}>
      <HiArrowRightOnRectangle className="text-blue-700" />
    </ButtonIcon>
  );
}

export default Logout;
