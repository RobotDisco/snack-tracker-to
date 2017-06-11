import React, { Component } from 'react';

class Snack extends Component {
    render() {
	return (
	    <tr>
	      <td>{this.props.name}</td>
	      <td>{this.props.price}</td>
	    </tr>
	);
    }
}

export default Snack;
