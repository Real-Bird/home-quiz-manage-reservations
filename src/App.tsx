import { Button, Layout } from "@src/components/common";
import { useEdit } from "@src/contexts/edit";
import { useResister } from "@src/contexts/resister";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, resisterDispatch] = useResister();
  const [, editDispatch] = useEdit();
  const navigate = useNavigate();
  const onModalOpen = () => {
    resisterDispatch({ type: "INITIALIZE" });
    editDispatch({ type: "INITIALIZE" });
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    resisterDispatch({ type: "INITIALIZE" });
    editDispatch({ type: "INITIALIZE" });
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <Layout>
      <Button className="text-highlight px-5" onClick={onModalOpen}>
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
