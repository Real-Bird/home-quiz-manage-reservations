import { ModalOverview } from "@src/components/common";
import { MainCard, MainContent, MainHeader } from "@src/components/reservation";
import { reservationData } from "@src/mockup/reservationData";

export const MainReservationModal = ({
  onModalClose,
}: MainReservationModalProps) => {
  return (
    <ModalOverview onOutsideClick={onModalClose}>
      <MainHeader
        onCloseModal={onModalClose}
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

interface MainReservationModalProps {
  onModalClose: () => void;
}
