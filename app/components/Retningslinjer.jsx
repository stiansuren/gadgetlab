import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

class Retningslinjer extends Component {
	render(){
		return (
			<div>
				<button className="nav" ><h2><Link to="/">Tilbake</Link></h2></button>
				<p>Vi trenger nye Retningslinjer</p>
			</div>
		)
	}
}

export default Retningslinjer