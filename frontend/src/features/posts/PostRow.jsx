import { format } from "date-fns";
import { serverUrl } from "../../utils/constants";
import { HiPencil, HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useDeletePost } from "./useDeletePost";

import CreatePostForm from "./CreatePostForm";

function PostRow({ post }) {
  const { _id, headerImage, title, authorName, date, content, keywords } = post;
  const navigate = useNavigate();

  const { deletePost, isDeleting } = useDeletePost();
  const fullImageUrl = `${serverUrl}/uploads/${headerImage}`;

  return (
    <Table.Row>
      <div
        className="block w-16 relative pl-[5%]"
        style={{ transform: "scale(1.5) translateX(-7px)" }}
      >
        <img
          src={fullImageUrl}
          alt="post image"
          className="pl-4 w-full h-full object-cover"
          style={{ aspectRatio: "3/2", objectPosition: "center" }}
        />
      </div>
      <div className="text-lg font-semibold text-grey-600">{title}</div>

      <div className="flex flex-col gap-1">
        <span className="font-medium">{authorName}</span>
        {/* <span className="text-gray-500 text-sm">{email}</span> */}
      </div>

      <div className="flex flex-col gap-1">
        <span>{format(new Date(date), "MMM dd yyyy")}</span>
      </div>

      <div className="font-semibold">{keywords.join(", ")}</div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={_id} />
          <Menus.List id={_id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/posts/${_id}`)}
            >
              See details
            </Menus.Button>

            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete post</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="edit">
            <CreatePostForm postToEdit={post} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="post"
              disabled={isDeleting}
              onConfirm={() => deletePost(_id)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default PostRow;
