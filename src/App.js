import "./styles.css";
import HOC from "./HOC";
import { createContext, useEffect, useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import { Routes, Route } from "react-router-dom";
import GlobalContext2 from "./GlobalContext2";
export const globalContext = createContext(" ");
export default function App() {
  console.log("APP ");
  useEffect(() => {
    console.log("APP EFFECT");

    return () => {
      console.log("APP EFFECT RETURN");
    };
  }, []);
  const [globalState, setGlobalState] = useState(0);
  return (
    <globalContext.Provider value={{ globalState, setGlobalState }}>
      <GlobalContext2>
        <Routes>
          <Route path="/" element={<HOC />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </GlobalContext2>
    </globalContext.Provider>
  );
}
