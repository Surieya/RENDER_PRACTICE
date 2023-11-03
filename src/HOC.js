import { useEffect } from "react";
import Component from "./Component";
import Component2 from "./Component2";
import { useContext } from "react";
import { globalContext } from "./App";
function HOC() {
  const { globalState } = useContext(globalContext);
  console.log("HOC");
  useEffect(() => {
    console.log("HOC EFFECT");
    return () => {
      console.log("HOC EFFECT RETURN");
    };
  }, [globalState]);
  return (
    <>
      <Component />
      <Component2 />
    </>
  );
}

export default HOC;
