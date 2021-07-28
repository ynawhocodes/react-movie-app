import React from 'react';


class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}))
  }
  render() {
    return (
      <>
      <p>number: {this.state.count}</p>
      <button onClick={this.add}>+</button>
      <button onClick={this.minus}>-</button>
      </>
    )
  }
}

export default App;
