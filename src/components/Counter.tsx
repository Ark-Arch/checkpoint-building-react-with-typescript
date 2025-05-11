import React, { Component } from 'react';

// Step 1: Define types for Props (empty in this case) and State
interface CounterProps {
  // No props here, but you could add any props if needed in the future
}

interface CounterState {
  count: number; // state contains count of type number
}

// Step 2: Extend React.Component with Props and State types
class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Define the state with initial value
  state: CounterState = {
    count: 0,
  };

  // Step 4: Define the increment function with no parameters, and no return type
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
