import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import {getRetningslinjer} from './../helpers';
import ReactMarkdown from 'react-markdown';

class Retningslinjer extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount(){
		getRetningslinjer()
			.then(data => {
				this.setState({
					data
				});

			})
	}

	render(){
		return (
			<div>
				<Link to="/" className='btn'><h2>Se gadgets</h2></Link>
				<h4>Retningslinjer</h4>
				<ReactMarkdown source = {this.state.data.desc} />
			</div>
		)
	}
}

export default Retningslinjer
