import React, {Component} from 'react';
import {render} from 'react-dom';

class BorrowButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			epost: []
		}
	}

	render(){

		return (
			<a href="mailto:ingar.kvalheim@bekk.no?subject=Jeg%20er%20gira%20på%20en%20gadget!&body=Hei!%0A%0AJeg vil gjerne laane .., fra .. og til ... Jeg lover å ha det gøy mens jeg låner den, at jeg leverer den tilbake til Gadget Lab-skapet og at jeg sier ifra til deg når jeg er ferdig." className="btn">
				<h4>Send forespørsel</h4>
			</a>
		)
	}
}

export default BorrowButton
