import { Button, Layout } from "@src/components/common";
import { MainReservationModal } from "@src/pages/MainReservation";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <Button
        className="text-highlight px-5"
        onClick={() => setIsModalOpen(true)}>
        View Reservations
      </Button>
      {isModalOpen ? (
        <MainReservationModal onModalClose={() => setIsModalOpen(false)} />
      ) : null}
    </Layout>
  );
}

export default App;
