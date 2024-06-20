import Heading from "../ui/Heading";
import Row from "../ui/Row";
import PostTable from "../features/posts/PostTable";
import PostTableOperations from "../features/posts/PostTableOperations";
import AddPost from "../features/posts/AddPost";

function Posts() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Blogs Posts</Heading>
        <PostTableOperations />
      </Row>

      <Row>
        <PostTable />
        <AddPost />
      </Row>
    </>
  );
}

export default Posts;
