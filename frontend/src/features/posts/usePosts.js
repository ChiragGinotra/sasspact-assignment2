import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts } from "../../services/apiPosts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function usePosts() {
  // const queryClient = useQueryClient();
  // const [searchParams] = useSearchParams();

  // // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // // PAGINATION
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  // const {
  //   isLoading,
  //   data: { data: posts, count } = {},
  //   error,
  // } = useQuery({
  //   queryKey: ["posts", filter, sortBy, page],
  //   queryFn: () => fetchPosts({ filter, sortBy, page }),
  // });

  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // // PRE-FETCHING
  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // if (page < pageCount)
  //   queryClient.prefetchQuery({
  //     queryKey: ["posts", filter, sortBy, page + 1],
  //     queryFn: () => fetchPosts({ filter, sortBy, page: page + 1 }),
  //   });

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ["posts", filter, sortBy, page - 1],
  //     queryFn: () => fetchPosts({ filter, sortBy, page: page - 1 }),
  //   });

  // return { isLoading, error, posts, count };

  return { isLoading, error, posts };
}
