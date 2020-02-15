import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import ControlPanel from './ControlPanel';
import FluxControlPanel from './flux-demo/views/ControlPanel';

function App() {
  return (
    <div className="App">
      <ClickCounter></ClickCounter>
      <ControlPanel></ControlPanel>
      <hr/>
      <FluxControlPanel></FluxControlPanel>
    </div>
  );
}

export default App;
