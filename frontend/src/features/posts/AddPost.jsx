import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreatePostForm from "./CreatePostForm";

function AddPost() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Post</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreatePostForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddPost;
