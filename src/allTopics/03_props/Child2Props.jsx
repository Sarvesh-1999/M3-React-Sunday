const Child2Props = (props) => {
  console.log(props); // {data: {data:"Hii",arr:[],obj:{}}}

  let {data , arr , obj:{fullname:{fname,lname}}} = props.data
  
  return (
    <div>
      <h1>Child 2 Props</h1>
      <h2>{data} {fname} {lname}</h2>
    </div>
  );
};
export default Child2Props;
