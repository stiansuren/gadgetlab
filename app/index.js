import React, {Component} from 'react';
import {render} from 'react-dom';
import {getCards} from './helpers';
import Gadget from './components/Gadget.jsx'

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount() {
		getCards()
			.then(data => {
				this.setState({
					data 
				});
			})
	}

	render(){
		return (
			<div>{this.state.data.map(gadget => {
				return (
					<Gadget key={gadget.id} gadget={gadget}/> 
				)
			})}</div>
		)
	}
}

render(
	<App/>,
	document.getElementById('app')
);