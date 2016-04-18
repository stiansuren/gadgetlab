import React, {Component} from 'react';
import {render} from 'react-dom';

class InputForm extends Component {
	
	render(){
		return (
			<form onSubmit={this.props.confirmLoan}>
				<label>Fullt navn</label>
				<input autoComplete="name" placeholder="Fornavn og etternavn"/>
				<button className="btn">Bekreft</button>
			</form>
		)
	}
}

export default InputForm