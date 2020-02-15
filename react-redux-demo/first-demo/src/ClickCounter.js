import React, { Component } from 'react';

class ClickCounter extends Component {
  state = { count: 0 }



  onClickBtn(){
    this.setState({count: this.state.count + 1});
  }
  render () {
    return (
      <div>
        <button onClick={this.onClickBtn.bind(this)}>
          Click me!
        </button>
        <p>
          Click count: {this.state.count}
        </p>
      </div>
    );
  }
}

export default ClickCounter;