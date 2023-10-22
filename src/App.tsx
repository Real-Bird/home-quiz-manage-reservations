import { Button, Layout } from "@src/components/common";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const onModalClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <Layout>
      <Button
        className="text-highlight px-5"
        onClick={() => setIsModalOpen(true)}>
        View Reservations
      </Button>
      {isModalOpen ? <Outlet context={{ onModalClose }} /> : null}
    </Layout>
  );
}

export default App;

export interface OutletContextProps {
  onModalClose?: () => void;
}
