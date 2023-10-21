import { Layout, ModalOverview } from "@src/components/common";
import { SelectDate } from "@src/components/reservation";
import { useRef } from "react";

function App() {
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* <Button className="text-highlight px-5">View Reservations</Button> */}
      <ModalOverview>
        <SelectDate ref={myRef} />
      </ModalOverview>
    </Layout>
  );
}

export default App;
