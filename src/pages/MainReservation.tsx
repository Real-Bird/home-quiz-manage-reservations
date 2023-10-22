import { OutletContextProps } from "@src/App";
import { ModalOverview } from "@src/components/common";
import { MainCard, MainContent, MainHeader } from "@src/components/reservation";
import { reservationData } from "@src/mockup/reservationData";
import { useOutletContext } from "react-router-dom";

export const MainReservationModal = () => {
  const { onModalClose } = useOutletContext<OutletContextProps>();
  return (
    <ModalOverview onOutsideClick={onModalClose}>
      <MainHeader
        onModalClose={onModalClose}
        reservationCount={reservationData.length}
      />
      <MainContent>
        {reservationData.map((data) => (
          <MainCard key={data.id} {...data} />
        ))}
      </MainContent>
    </ModalOverview>
  );
};
