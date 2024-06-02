import UploadBlogForm from "../features/posts/UploadBlogForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Post New Blog</Heading>

      <Row>
        <UploadBlogForm />
      </Row>
    </>
  );
}

export default Account;
