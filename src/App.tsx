import { Layout, SelectTable } from "@src/components/common";
import { tableArr } from "@src/mockup/tableItems";

function App() {
  const mockupList = tableArr.map((item) => ({
    id: item.id,
    tableItemLabel: `Table ${item.table}·Floor ${item.floor}`,
  }));

  return (
    <Layout>
      {/* <Button className="text-highlight px-5">View Reservations</Button> */}
      <SelectTable tableItems={mockupList} />
    </Layout>
  );
}

export default App;
