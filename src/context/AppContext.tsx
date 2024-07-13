import { createContext } from "react";

export const AppContext = createContext({});
const ContextProvider = (props: any) => {
  const phone = "+91 1234567890";
  const name = "Govind Rajput";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;