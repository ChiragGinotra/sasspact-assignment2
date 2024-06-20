import Username from "../features/authentication/Username";
import HeaderMenu from "./HeaderMenu";

// import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  return (
    <header className="bg-grey-0 h-14 lg:h-16 xl:h-20 py-[1.2rem] px-[4.8rem] border-b border-grey-100 flex gap-[2.4rem] items-center justify-end">
      {/* <UserAvatar /> */}
      {/* <div className="text-xl"> UserName</div> */}
      <Username />
      <HeaderMenu />
    </header>
  );
}

export default Header;
