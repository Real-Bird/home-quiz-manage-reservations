import { Button, Layout } from "@src/components/common";
import { EditReservationModal } from "@src/pages/EditReservation";
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
        <EditReservationModal onModalClose={() => setIsModalOpen(false)} />
      ) : null}
    </Layout>
  );
}

export default App;
