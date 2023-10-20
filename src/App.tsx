import { Layout, TextArea } from "@src/components/common";
import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  return (
    <Layout>
      {/* <Button className="text-highlight px-5">View Reservations</Button> */}
      <TextArea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
    </Layout>
  );
}

export default App;
