import { Input, Layout } from "@src/components/common";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Layout>
      {/* <Button className="text-highlight px-5">View Reservations</Button> */}
      <Input
        placeholder="Name"
        required
        id="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
    </Layout>
  );
}

export default App;
