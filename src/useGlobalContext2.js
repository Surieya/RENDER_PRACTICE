import { useContext } from "react";
import { newGlobalContext } from "./GlobalContext2";
console.log("USE GLOBAL CONTEXT 2");
export default function useGlobalContext2() {
  return useContext(newGlobalContext);
}
