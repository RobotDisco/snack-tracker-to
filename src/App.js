import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './Employees.js';
import { employees } from './State.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<div className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  <h2>Welcome to React</h2>
	</div>
	<p className="App-intro">
	  To get started, edit <code>src/App.js</code> and save to reload.
	</p>
	<div>
	  <Employees employees={employees} />
	</div>
      </div>
    );
  }
}

export default App;
