import PostRow from "./PostRow";
import Table from "../../ui/Table";

import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { usePosts } from "./usePosts";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function PostTable() {
  const { posts, isLoading, count } = usePosts();

  if (isLoading) return <Spinner />;

  if (!posts?.length) return <Empty resourceName="blog posts" />;

  return (
    <Menus>
      {/* columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem" */}
      {/* 2fr 2fr 3fr 2.5fr 4fr 3.2rem */}
      <Table columns="2fr_2fr_3fr_2.5fr_4fr_3.2rem">
        <Table.Header>
          <div></div>
          <div>Title</div>
          <div>Author Name</div>
          <div>Date</div>
          <div>Keywords</div>

          <div></div>
        </Table.Header>

        <Table.Body
          data={posts}
          render={(post) => <PostRow key={post._id} post={post} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PostTable;
