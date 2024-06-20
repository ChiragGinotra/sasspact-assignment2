import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-lg ml-2">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-1.5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`bg-grey-50 text-inherit border-none rounded-sm font-medium text-lg flex items-center justify-center gap-1 px-3 py-1.5 transition-all duration-300 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-brand-600 hover:text-brand-50"
          }`}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`bg-grey-50 text-inherit border-none rounded-sm font-medium text-lg flex items-center justify-center gap-1 px-3 py-1.5 transition-all duration-300 ${
            currentPage === pageCount
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-brand-600 hover:text-brand-50"
          }`}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
