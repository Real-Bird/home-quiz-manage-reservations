import {
  INITIAL_STATE,
  ReservationListActionType,
  ReservationListContext,
  ReservationListType,
} from "@src/contexts/reservationList";
import { ReactNode, useReducer } from "react";

const reducer = (
  state: ReservationListType,
  action: ReservationListActionType
): ReservationListType => {
  switch (action.type) {
    case "INITIALIZE": {
      return INITIAL_STATE;
    }
    case "SET_RESERVATION": {
      return [
        ...state,
        {
          ...action.reservation,
          id: action.reservation.id || crypto.randomUUID(),
        },
      ];
    }
    case "EDIT_RESERVATION": {
      return state.map((item) =>
        item.id === action.reservation.id ? action.reservation : item
      );
    }
    case "FILTER_RESERVATION": {
      const filteredState = state.map((item) =>
        item.id === action.reservation.id
          ? {
              ...item,
              isSeated: true,
            }
          : item
      );
      return filteredState;
    }
    case "DELETE_RESERVATION": {
      return state.filter((item) => item.id !== action.reservation.id);
    }
    default: {
      return state;
    }
  }
};

const ReservationListProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ReservationListContext.Provider value={{ state, dispatch }}>
      {children}
    </ReservationListContext.Provider>
  );
};

export default ReservationListProvider;

interface ProviderProps {
  children: ReactNode;
}
