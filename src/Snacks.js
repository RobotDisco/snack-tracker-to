import React, { Component } from 'react';
import Snack from './Snack';

class Snacks extends Component {
    render() {
	let rows = this.props.snacks.map(snack => (
	    <Snack key={snack.id} name={snack.name} price={snack.price} />
	));

	return (
	    <table>
	      <thead>
		<tr>
		  <th>Snack</th>
		  <th>Price</th>
		</tr>
	      </thead>
	      <tbody>
		{rows}
	      </tbody>
	    </table>
	);
    }
}

export default Snacks;
