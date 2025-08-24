import { useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParent = () => {
    const [state,setState] = useState("")
  
  function recieveData(data) {
    console.log("Data is", data);
    setState(data)
  }

  return (
    <div>
      <h1>Callback Parent {state}</h1>

      <CallbackChild recieveData={recieveData} />
    </div>
  );
};

export default CallbackParent;
