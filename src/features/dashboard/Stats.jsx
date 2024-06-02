import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import Stat from "./Stat";

function Stats() {
  // 1.
  const numBlogs = 0;

  // 2.
  const sales = 0;

  // 3.
  const likes = 0;

  // 4.
  const occupation = 1;

  return (
    <>
      <Stat
        title="Blogs"
        color="blue"
        icon={<HiOutlineBriefcase className="w-[2rem] h-[2rem]" />}
        value={numBlogs}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes className="w-[2rem] h-[2rem] " />}
        value={sales}
      />
      <Stat
        title="Likes"
        color="indigo"
        icon={<BiLike className="w-[2rem] h-[2rem]" />}
        value={likes}
      />
      <Stat
        title="Reading rate"
        color="yellow"
        icon={<HiOutlineChartBar className="w-[2rem] h-[2rem]" />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
