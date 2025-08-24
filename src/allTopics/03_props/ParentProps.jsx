import Child1Props from "./Child1Props";
import Child2Props from "./Child2Props";
const ParentProps = () => {
  let data = "Hiii";

  let arr = [10, 20, 30, 40];

  let obj = {
    id: "32A1",
    fullname: {
      fname: "John",
      lname: "Doe",
    },
    company: "TCS",
    salary: 50000,
  };

  return (
    <div>
      <h1>Parent Props</h1>

      {/* sending multiple props */}
      <Child1Props str={data} arr={arr} obj={obj} />

      {/* sending single prop with multiple data  */}
      <Child2Props data={{data,obj,arr}}/>
    </div>
  );
};
export default ParentProps;
