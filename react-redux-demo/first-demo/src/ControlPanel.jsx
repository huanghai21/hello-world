import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      first: 0,
      second: 10,
      third: 20,
      total: 30
    };
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
  }

  onCounterUpdate (key, val) {
    const obj = { [key.toLowerCase()]: val };
    this.setState(obj);
    const changed = Object.assign({}, this.state, obj);
    this.setState({ total: changed.first + changed.second + changed.third });
  }
  render () {
    return (
      <div>
        <Counter onUpdate={this.onCounterUpdate} label="First" value={this.state.first}></Counter>
        <Counter onUpdate={this.onCounterUpdate} label="Second" value={this.state.second}></Counter>
        <Counter onUpdate={this.onCounterUpdate} label="Third" value={this.state.third}></Counter>
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