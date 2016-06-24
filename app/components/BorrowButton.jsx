import React, {Component} from 'react';
import {render} from 'react-dom';

class BorrowButton extends Component {

	// let mailLink = 'mailto:stian.suren@bekk.no?subject=Jeg%20vil%20låne!&body=Hei';

	render(){
		return (
			<a href="mailto:stian.suren@bekk.no?subject=Jeg%20er%20gira%20på%20en%20gadget!&body=Hei!%0A%0AJeg vil gjerne låne (denne gadgeten), fra (dato) og til (dato eller ubestemt). Jeg lover å ha det gøy mens jeg låner den, at jeg leverer den tilbake til Gadget Lab-skapet og at jeg sier ifra til deg når jeg er ferdig." className="btn">
				Send forespørsel
			</a>
			// <button onClick={this.props.openInput} className="btn" id={this.props.name}>
			// 	Lån {this.props.name}
			// </button>
		)
	}
}

export default BorrowButton