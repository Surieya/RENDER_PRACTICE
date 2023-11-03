import { useState, useEffect } from "react";
import useGlobalContext2 from "./useGlobalContext2";
import { Link } from "react-router-dom";
function Component2() {
  const { globalState2 } = useGlobalContext2();
  console.log("COMPONENT 2");

  return (
    <>
      <p>{globalState2}</p>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </>
  );
}

export default Component2;
