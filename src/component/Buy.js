import React, { Component } from 'react';

class Buy extends Component {
    render() {
	return (
	    <button disabled={!this.props.enabled} onClick={(e) => this.props.cb(this.props.employeeId, this.props.snackId)}>Buy</button>
	);
    };
}

export default Buy;
