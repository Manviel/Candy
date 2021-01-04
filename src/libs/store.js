import { createContext, useReducer, useMemo, useContext } from "react";

export const CustomerContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, customers: action.payload };
    default:
      return { ...state };
  }
};

export const CustomerStore = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    customers: [],
  });

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CustomerContext.Provider value={contextValue}>
      {props.children}
    </CustomerContext.Provider>
  );
};

export const useCustomerStore = () => useContext(CustomerContext);
