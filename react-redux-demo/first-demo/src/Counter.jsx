import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value || 0
    };
    this.onClicked = this.onClicked.bind(this);
  }
  clickPlus () {
    const newVal = this.state.count + 1;
    this.setState({ count: newVal });
    this.onClicked(this.props.label, newVal);
  }
  clickMinus () {
    const newVal = this.state.count - 1;
    this.setState({ count: newVal });
    this.onClicked(this.props.label, newVal);
  }

  onClicked (key, val) {
    const { onUpdate } = this.props;
    onUpdate(key, val);
  }
  render () {
    const { label } = this.props;
    return (
      <div className="text-left">
        <button onClick={this.clickPlus.bind(this)}>+</button>
        <button onClick={this.clickMinus.bind(this)}>-</button>
        <label>{label}: </label>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;