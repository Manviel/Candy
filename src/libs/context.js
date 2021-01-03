import { createContext, useReducer, useMemo } from "react";

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return { ...state, ...action.payload };
    case "update":
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    id: null,
    syn: [],
  });

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
