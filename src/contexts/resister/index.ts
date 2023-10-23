import { Dispatch, createContext, useContext } from "react";

export const INITIAL_STATE: ResisterType = {
  id: "",
  clientName: "",
  phoneNumber: "",
  reservedDate: undefined,
  personCount: 1,
  reservedTable: [],
  notes: undefined,
  isSeated: false,
};

export const ResisterContext = createContext<ContextType | null>(null);

export const useResister = (): [ResisterType, DispatchResisterAction] => {
  const context = useContext(ResisterContext);
  if (!context) {
    throw new Error("useResister must be used within a ResisterProvider");
  }
  return [context.state, context.dispatch];
};

export type ResisterType = ReservationData.Reservation;
export type ResisterActionType =
  | { type: "INITIALIZE" }
  | {
      type: "SET_RESERVATION";
      keyword: keyof ResisterType;
      value: ResisterType[Partial<keyof ResisterType>];
    };
type DispatchResisterAction = Dispatch<ResisterActionType>;

interface ContextType {
  state: ResisterType;
  dispatch: DispatchResisterAction;
}
