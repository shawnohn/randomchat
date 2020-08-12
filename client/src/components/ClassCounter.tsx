import React, { PureComponent } from 'react';
class ClassCounter extends PureComponent<{}, { count: number }> {
  state = { count: 0 };
  updateCount = (e: React.MouseEvent<HTMLButtonElement>): void => {
    switch (e.currentTarget.innerText) {
      case '-':
        this.setState({ count: this.state.count - 1 });
        break;
      case '+':
      default:
        this.setState({ count: this.state.count + 1 });
        break;
    }
  };
  render(): JSX.Element {
    const { count } = this.state;
    return (
      <div>
        <h2>Class Component</h2>
        <h1>{count}</h1>
        <button onClick={this.updateCount}>+</button>
        <button onClick={this.updateCount}>-</button>
      </div>
    );
  }
}
export default ClassCounter;
