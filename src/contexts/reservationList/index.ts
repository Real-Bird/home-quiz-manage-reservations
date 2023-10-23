import { Dispatch, createContext, useContext } from "react";

export const INITIAL_STATE: ReservationListType = [];

export const ReservationListContext = createContext<ContextType | null>(null);

export const useReservationList = (): [
  ReservationListType,
  Dispatch<ReservationListActionType>
] => {
  const context = useContext(ReservationListContext);
  if (!context) {
    throw new Error(
      "useReservationList must be used within a ReservationListProvider"
    );
  }
  return [context.state, context.dispatch];
};

export type ReservationListType = ReservationData.Reservation[];

export type ReservationListActionType =
  | {
      type: "INITIALIZE";
    }
  | { type: "SET_RESERVATION"; reservation: ReservationData.Reservation }
  | { type: "FILTER_RESERVATION"; reservation: ReservationData.Reservation }
  | { type: "DELETE_RESERVATION"; reservation: ReservationData.Reservation }
  | { type: "EDIT_RESERVATION"; reservation: ReservationData.Reservation };

interface ContextType {
  state: ReservationListType;
  dispatch: Dispatch<ReservationListActionType>;
}
