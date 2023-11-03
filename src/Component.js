import { useContext, useEffect, useState } from "react";
import { globalContext } from "./App";
import useGlobalContext2 from "./useGlobalContext2";
// import { globalContext2 } from "./ContextHook";

function Component() {
  const [componentState, setComponentState] = useState(0);
  const { globalState2, setGlobalState2 } = useGlobalContext2();
  console.log("COMPONENT");
  const { globalState, setGlobalState } = useContext(globalContext);
  useEffect(() => {
    console.log("COMPONENT EFFECT");

    return () => {
      console.log("COMPONENT EFFECT RETURN");
    };
  }, [globalState]);
  return (
    <>
      <p>{`GLOBAL STATE ${globalState} , COMPONENT STATE ${componentState} , GLOBALHOOKSTATE ${globalState2}`}</p>
      <button onClick={() => setGlobalState((prev) => prev + 1)}>
        GLOBAL CLICK
      </button>
      <button onClick={() => setComponentState((prev) => prev + 1)}>
        {" "}
        COMPONENT CLICK
      </button>
      <button onClick={() => setGlobalState2((prev) => prev + 1)}>
        {" "}
        GLOBAL STATE CLICK 2
      </button>
    </>
  );
}

export default Component;
