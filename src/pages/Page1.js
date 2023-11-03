import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalContext2 from "../useGlobalContext2";
function Page1() {
  const { globalState2, setGlobalState2 } = useGlobalContext2();
  console.log("PAGE 1");
  useEffect(() => {
    console.log("PAGE 1 EFFECT");
  }, []);
  return (
    <>
      <Link to="/">Back</Link>
      <p>{globalState2}</p>
      <button onClick={() => setGlobalState2((prev) => prev + 1)}>
        Increse
      </button>
    </>
  );
}

export default Page1;
