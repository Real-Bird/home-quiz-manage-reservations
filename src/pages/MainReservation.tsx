import { OutletContextProps } from "@src/App";
import { ModalOverview } from "@src/components/common";
import { MainCard, MainContent, MainHeader } from "@src/components/reservation";
import { useReservationList } from "@src/contexts/reservationList";
import { useOutletContext } from "react-router-dom";

export const MainReservationModal = () => {
  const { onModalClose } = useOutletContext<OutletContextProps>();
  const [reservationData] = useReservationList();
  return (
    <ModalOverview>
      <MainHeader
        onModalClose={onModalClose}
        reservationCount={reservationData.length}
      />
      <MainContent>
        {reservationData
          .filter((item) => !item.isSeated)
          .map((data) => (
            <MainCard key={data.id} data={data} />
          ))}
      </MainContent>
    </ModalOverview>
  );
};
