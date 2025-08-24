const CallbackChild = (props) => {
  let data = "Hello React";

  return (
    <div>
      <h1>Callback Child</h1>

      <button onClick={()=>props.recieveData(data)}>
        send data
      </button>

    </div>
  );
};

export default CallbackChild;
