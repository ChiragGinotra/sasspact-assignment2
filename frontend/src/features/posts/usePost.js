import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../services/apiPosts";

export function usePost() {
  const { postId } = useParams();

  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    retry: false,
  });

  return { isLoading, error, post };
}
