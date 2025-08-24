import DrillChild2 from "./DrillChild2";

const DrillChild1 = (props) => {
  console.log(props); // {str : "Hello World"}

  return (
    <div>
      <h1>DrillChild1</h1>

      <DrillChild2 str={props.str} />
    </div>
  );
};

export default DrillChild1;
