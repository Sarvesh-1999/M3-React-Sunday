import { Component } from "react";

class StatesInCbc extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.increment = () => {
      this.setState({ value: this.state.value + 1 });
    };
  }

  render() {
    console.log(this);

    return (
      <div>
        <h1>States In Class Based</h1>
        <h2>Counter : {this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default StatesInCbc;
