import React, { Component } from 'react';
import CounterStore from '../stores/CounterStore';
import * as Actions from '../Actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: CounterStore.getValues()[props.label.toLowerCase()]
    };
    this.onClicked = this.onClicked.bind(this);
  }
  componentDidMount () {
    CounterStore.addChangeListener(this.onClicked)
  }
  componentWillUnmount () {
    CounterStore.removeChangeListener(this.onClicked)
  }
  clickPlus () {
    Actions.plus(this.props.label);
  }
  clickMinus () {
    Actions.minus(this.props.label);
  }

  onClicked () {
    const newVal = CounterStore.getValues()[this.props.label.toLowerCase()];
    this.setState({ count: newVal });
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