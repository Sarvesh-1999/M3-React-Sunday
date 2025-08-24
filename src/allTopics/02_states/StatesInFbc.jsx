import { useState } from "react";

const StatesInFbc = () => {
  let [state, setState] = useState("Add To Cart"); // [ "Add To Cart" , f ]

  function btnHandle() {
    console.log("Btn CLicked");
    setState("Go To Cart");
  }

  return (
    <div>
      <h1>States In Function Based</h1>
      <button onClick={btnHandle}> {state} </button>
    </div>
  );
};
export default StatesInFbc;
