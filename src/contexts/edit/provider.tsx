import {
  EditActionType,
  EditContext,
  EditType,
  INITIAL_STATE,
} from "@src/contexts/edit";
import { ReactNode, useReducer } from "react";

const reducer = (state: EditType, action: EditActionType): EditType => {
  switch (action.type) {
    case "INITIALIZE": {
      return INITIAL_STATE;
    }
    case "GET_RESERVATION": {
      return { ...action.reservation };
    }
    case "SET_RESERVATION": {
      return { ...state, [action.keyword]: action.value };
    }
    default: {
      return state;
    }
  }
};

const EditProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <EditContext.Provider value={{ state, dispatch }}>
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;

interface ProviderProps {
  children: ReactNode;
}
