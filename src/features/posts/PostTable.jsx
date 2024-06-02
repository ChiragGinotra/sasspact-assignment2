import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

// import Spinner from "../../ui/Spinner";

function BookingTable() {
  // if (isLoading) return <Spinner />;

  if (!false) return <Empty resourceName="blog posts" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
      </Table>
    </Menus>
  );
}

export default BookingTable;
