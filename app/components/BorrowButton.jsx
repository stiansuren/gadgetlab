import React, {Component} from 'react';
import {render} from 'react-dom';

class BorrowButton extends Component {
	render(){
		return (
			<button onClick={this.props.openInput} className="btn" id={this.props.name}>
				Lån {this.props.name}
			</button>
		)
	}
}

export default BorrowButton