/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './Employees.js';
import Snacks from './Snacks.js';
import Buy from './Buy.js';
import { employees, snacks, Employee, Snack } from './State.js';

type Props = {};
type employeeId = number;
type snackId = number;

class App extends Component {
    state: {
	employees: Array<Employee>,
	snacks: Array<Snack>,
	selectedEmployee: ?number,
	selectedSnack: ?number

    };
    props: Props;

    _selectEmployee: () => void
    _selectEmployee(id: number) {
	this.setState({selectedEmployee: id});
    };

    _selectSnack: () => void
    _selectSnack(id: number) {
	this.setState({selectedSnack: id});
    };

    _buySnack: () => void
    _buySnack(employeeId: employeeId, snackId: snackId) {
	let newEmployees = this.state.employees;
	newEmployees[employeeId].balance -= this.state.snacks[snackId].price;

	this.setState({employees: newEmployees});
    };

    constructor(props: Props) {
	super(props);

	this.state = {
	    employees: employees(),
	    snacks: snacks(),
	    selectedEmployee: null,
	    selectedSnack: null
	};

	this._selectEmployee = this._selectEmployee.bind(this);
	this._selectSnack = this._selectSnack.bind(this);
	this._buySnack = this._buySnack.bind(this);
    }

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
		<Employees employees={this.state.employees} cb={this._selectEmployee} />
	      </div>
	      <div>
		<Snacks snacks={this.state.snacks} cb={this._selectSnack} />
	      </div>
	      <div>
		<Buy cb={this._buySnack} employeeId={this.state.selectedEmployee} snackId={this.state.selectedSnack} enabled={this.state.selectedSnack != null && this.state.selectedEmployee != null}/>
	      </div>
	    </div>
	);
    }
}

export default App;
