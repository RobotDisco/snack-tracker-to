import React, { Component } from 'react';

class Snack extends Component {
    render() {
	return (
	    <tr onClick={() => this.props.cb(this.props.id)}>
	      <td>{this.props.name}</td>
	      <td>{this.props.price}</td>
	    </tr>
	);
    }
}

export default Snack;
