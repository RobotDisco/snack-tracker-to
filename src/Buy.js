import React, { Component } from 'react';

class Buy extends Component {
    render() {
	return (
	    <button disabled={!this.props.enabled}>Buy</button>
	);
    };
}

export default Buy;
