import Spinner from "../../ui/Spinner";
import { usePosts } from "../posts/usePosts";
import Stats from "./Stats";

function DashboardLayout() {
  const { posts, isLoading: isLoading1 } = usePosts();

  if (isLoading1) return <Spinner />;

  return (
    <div className="grid grid-cols-2 grid-rows-[auto_auto_24rem_auto] lg:grid-cols-4 lg:grid-rows-[auto_24rem_auto] gap-[1.5rem]">
      <Stats numPosts={posts.length} />
    </div>
  );
}

export default DashboardLayout;
