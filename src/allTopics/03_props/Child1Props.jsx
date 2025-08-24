const Child1Props = (props) => {
  console.log(props); //{str:"Hiii", arr:[],obj:{}}

  return (
    <div>
      <h1>Child 1 Props {props.str}</h1>
      <h2>Array is {props.arr}</h2>
      <br />
      <h2>
        Fullname : {props.obj.fullname.fname} {props.obj.fullname.lname}
      </h2>
      <h2>Company : {props.obj.company}</h2>
      <h2>Salary : {props.obj.salary}</h2>
    </div>
  );
};
export default Child1Props;
