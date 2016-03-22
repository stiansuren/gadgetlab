import React, {Component} from 'react';
import {render} from 'react-dom';

class BorrowButton extends Component {
	render(){
		return <button className="btn">Lån {this.props.name}</button>
	}
}

export default BorrowButton