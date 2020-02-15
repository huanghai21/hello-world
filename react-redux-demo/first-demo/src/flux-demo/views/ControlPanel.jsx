import React, { Component } from 'react';
import Counter from './Counter';
import SummaryStore from '../stores/SummaryStore'
import CounterStore from '../stores/CounterStore'

class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      total: SummaryStore.getSummary()
    }
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
  }

  componentDidMount () {
    CounterStore.addChangeListener(this.onCounterUpdate)
  }
  componentWillUnmount () {
    CounterStore.removeChangeListener(this.onCounterUpdate)
  }

  onCounterUpdate () {
    this.setState({ total: SummaryStore.getSummary() });
  }
  render () {
    return (
      <div>
        <Counter label="First"></Counter>
        <Counter label="Second"></Counter>
        <Counter label="Third"></Counter>
        <hr />
        <div className="text-left">
          <label>Total: </label>
          <span>{this.state.total}</span>
        </div>
      </div>
    );
  }
}

export default ControlPanel;