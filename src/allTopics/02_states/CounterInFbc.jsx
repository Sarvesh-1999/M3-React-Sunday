import { useState } from "react";
const CounterInFbc = () => {
  const [count, setCount] = useState({ value: 0 }); // [ud , f]

  const incre = () => {
    setCount((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  const decre = () => {
    setCount((prevState) => {
      if (prevState.value > 0) {
        return { value: prevState.value - 1 };
      } else {
        return { value: 0 };
      }
    });
  };

  const reset = () => {
    setCount(() => {
      return { value: 0 };
    });
  };

  return (
    <div>
      <h1>Counter In Function Based</h1>
      <h2>Counter : {count.value}</h2>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  );
};
export default CounterInFbc;
