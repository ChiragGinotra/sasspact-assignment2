import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useDeletePost } from "./useDeletePost";
import { usePost } from "./usePost";
import { useMoveBack } from "../../hooks/useMoveBack";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { serverUrl } from "../../utils/constants";
import Button from "../../ui/Button";

export default function PostDetails() {
  const { post, isLoading } = usePost();
  const { deletePost, isDeleting } = useDeletePost();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (!post) return <Empty resourceName="post" />;

  const {
    _id: postId,
    headerImage,
    title,
    description,
    serialNo,
    authorName,
    date,
    content,
    keywords,
  } = post;

  const fullImageUrl = `${serverUrl}/uploads/${headerImage}`;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-GB"); // en-GB is for DD/MM/YYYY format
  };

  const formattedDate = formatDate(date);
  return (
    <div className="mx-[1%]">
      <header className="flex justify-between mb-[3%]">
        <div className="text-4xl xl:text-5xl font-bold text-[#111111]">
          Blog #{serialNo}
        </div>
        <div>
          <button
            className="text-2xl xl:text-2xl text-blue-600"
            onClick={moveBack}
          >
            &larr; Back
          </button>
        </div>
      </header>

      <main className="border-2  rounded-3xl  bg-grey-0">
        <header className="py-6 px-14 bg-blue-600 rounded-t-3xl  text-grey-200">
          <div className="flex justify-center text-4xl  tracking-wider">
            {title}
          </div>
          <div className="flex justify-center pt-2 text-2xl tracking-wide">
            {description}
          </div>

          <div className="text-xl xl:text-2xl ">Author - {authorName}</div>

          <div className="flex flex-col gap-4 items-end">
            <div className="flex gap-4">
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="text-xl xl:text-2xl bg-red-400  text-black px-1 lg:px-2 xl:px-3 py-1 rounded-lg"
                >
                  {keyword}
                </div>
              ))}
            </div>
            <div className="text-xl xl:text-2xl ">
              Published on {formattedDate}
            </div>
          </div>
        </header>

        <article>
          <img
            src={fullImageUrl}
            alt="post image"
            className="w-full h-[30rem] object-cover"
          />

          <div className="py-6 px-14">{content}</div>
        </article>
      </main>
      <footer className="mt-12 flex gap-8 justify-end">
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger" size="large">
              Delete Blog
            </Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="blog"
              disabled={isDeleting}
              onConfirm={() =>
                deletePost(postId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" size="large" onClick={moveBack}>
          Back
        </Button>
      </footer>
    </div>
  );
}
