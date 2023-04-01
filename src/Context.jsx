import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    delivery: null,
  });

  return (
    <Context.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
