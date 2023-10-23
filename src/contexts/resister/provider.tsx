import {
  INITIAL_STATE,
  ResisterActionType,
  ResisterContext,
  ResisterType,
} from "@src/contexts/resister";
import { ReactNode, useReducer } from "react";

const reducer = (
  state: ResisterType,
  action: ResisterActionType
): ResisterType => {
  switch (action.type) {
    case "INITIALIZE": {
      return INITIAL_STATE;
    }
    case "SET_RESERVATION": {
      return { ...state, [action.keyword]: action.value };
    }
    default: {
      return state;
    }
  }
};

const ResisterProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ResisterContext.Provider value={{ state, dispatch }}>
      {children}
    </ResisterContext.Provider>
  );
};

export default ResisterProvider;

interface ProviderProps {
  children: ReactNode;
}
