import { useState, createContext } from "react";
export const newGlobalContext = createContext(" ");
function GlobalContext2({ children }) {
  const [globalState2, setGlobalState2] = useState(100);
  console.log("GLOBAL CONTEXT 2");
  return (
    <newGlobalContext.Provider value={{ globalState2, setGlobalState2 }}>
      {children}
    </newGlobalContext.Provider>
  );
}

export default GlobalContext2;
