import React, { Component } from 'react';
import Employee from './Employee';

class Employees extends Component {
    render() {
	let rows = this.props.employees.map(employee => (
	    <Employee key={employee.id} name={employee.name} balance={employee.balance} />
	));

	return (
	    <table>
	      <thead>
		<tr>
		  <th>Name</th>
		  <th>Balance</th>
		</tr>
	      </thead>
	      <tbody>
		{rows}
	      </tbody>
	    </table>
	);
    }
}

export default Employees;
