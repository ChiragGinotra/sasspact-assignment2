import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function PostTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="status" options={[{ value: "all", label: "All" }]} />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
        ]}
      />
    </TableOperations>
  );
}

export default PostTableOperations;
