import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside
      className="bg-grey-0 px-1 py-[3rem] lg:px-[2.4rem] border-r border-grey-100 flex flex-col gap-8 h-full"
      style={{ gridRow: "1 / -1" }}
    >
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
