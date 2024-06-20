import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[10rem_1fr] lg:grid-cols-[14rem_1fr] xl:grid-cols-[18rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-grey-50 pt-[3rem] px-[3rem] pb-[5rem] overflow-scroll">
        <div className="max-w-[90rem] mx-auto flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
