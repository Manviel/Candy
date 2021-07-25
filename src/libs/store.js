import { createContext, useReducer, useMemo, useContext } from "react";

export const CustomerContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, customers: action.payload };
    case "auth":
      return { ...state, isLoggedIn: action.payload };
    default:
      return { ...state };
  }
};

export const CustomerStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    customers: [],
    isLoggedIn: false,
  });

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerStore = () => useContext(CustomerContext);
