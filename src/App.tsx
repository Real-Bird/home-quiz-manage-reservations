import { Input, Layout } from "@src/components/common";
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Layout>
      {/* <Button className="text-highlight px-5">View Reservations</Button> */}
      <Input placeholder="Name" required id="name" ref={inputRef} />
    </Layout>
  );
}

export default App;
