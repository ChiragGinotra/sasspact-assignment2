import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost as updatePostApi } from "../../services/apiPosts";
import { toast } from "react-hot-toast";

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: updatePost, isLoading: isEditing } = useMutation({
    // mutationFn: ({ newPostData, id }) => updatePostApi(newPostData, id),
    mutationFn: updatePostApi,
    onSuccess: () => {
      toast.success("Post successfully edited");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updatePost };
}
