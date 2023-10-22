import { Button, Header } from "@src/components/common";
import { useNavigate } from "react-router-dom";

export const MainHeader = ({
  onModalClose,
  reservationCount,
}: MainHeaderProps) => {
  const navigate = useNavigate();
  return (
    <Header onModalClose={onModalClose}>
      <Button
        className="px-4 bg-default from-default to-white justify-self-start before:content-[''] before:bg-[url(../assets/icons/add.svg)] before:w-6 before:h-6 before:bg-cover"
        onClick={() => navigate("/register")}>
        <span className="text-highlight">New Reservation</span>
      </Button>
      <div className="text-2xl text-center">
        <h2 className="relative">
          Reservation
          {reservationCount ? (
            <div className="w-5 h-5 text-sm text-white rounded-full bg-highlight leading-tight text-center absolute right-6 top-0 translate-y-1/3">
              {reservationCount}
            </div>
          ) : null}
        </h2>
      </div>
    </Header>
  );
};

interface MainHeaderProps {
  onModalClose?: () => void;
  reservationCount?: number;
}
