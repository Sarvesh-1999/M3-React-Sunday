const DrillChild2 = (props) => {
  console.log(props); // {str:"Hello WOrld"}

  return (
    <div>
      <h1>DrillChild2 {props.str}</h1>
    </div>
  );
};

export default DrillChild2;
