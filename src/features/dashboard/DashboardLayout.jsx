// import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

function DashboardLayout() {
  // if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div className="grid grid-cols-2 grid-rows-[auto_auto_24rem_auto] lg:grid-cols-4 lg:grid-rows-[auto_24rem_auto] gap-[1.5rem]">
      <Stats />
    </div>
  );
}

export default DashboardLayout;
