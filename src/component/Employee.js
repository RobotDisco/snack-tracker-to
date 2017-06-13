import React, { Component } from 'react';

class Employee extends Component {
    render() {
	return (
	    <tr onClick={(e) => this.props.cb(this.props.id)}>
	      <td>{this.props.name}</td>
	      <td>{this.props.balance}</td>
	    </tr>
	);
    }
}

export default Employee;
