import { Dispatch, createContext, useContext } from "react";

export const INITIAL_STATE: EditType = {
  id: "",
  clientName: "",
  phoneNumber: "",
  reservedDate: undefined,
  personCount: 1,
  reservedTable: [],
  notes: undefined,
  isSeated: false,
};

export const EditContext = createContext<ContextType | null>(null);

export const useEdit = (): [EditType, DispatchEditAction] => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error("useEdit must be used within a EditProvider");
  }
  return [context.state, context.dispatch];
};

export type EditType = ReservationData.Reservation;
export type EditActionType =
  | { type: "INITIALIZE" }
  | { type: "GET_RESERVATION"; reservation: EditType }
  | {
      type: "SET_RESERVATION";
      keyword: keyof EditType;
      value: EditType[Partial<keyof EditType>];
    };
type DispatchEditAction = Dispatch<EditActionType>;

interface ContextType {
  state: EditType;
  dispatch: DispatchEditAction;
}
