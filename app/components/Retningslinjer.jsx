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
			<div className="info-page">
				<Link to="/" className='btn'><h2>Gadgets</h2></Link>
				<h3>Retningslinjer</h3>
				<ReactMarkdown source = {this.state.data.desc} />
			</div>
		)
	}
}

export default Retningslinjer