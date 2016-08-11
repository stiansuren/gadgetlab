import React, {Component} from 'react';
import {render} from 'react-dom';
import {getCards} from './helpers';
import Gadget from './components/Gadget.jsx';
import Retningslinjer from './components/Retningslinjer.jsx';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class App extends Component {
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

class Gadgets extends Component {
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
		return(
			<div>
				<Link to="/retningslinjer" className='btn'><h2>Retningslinjer</h2></Link>
				<h3>{this.state.data.length} Gadgets</h3>
					{this.state.data.map(gadget => {
						return (
							<Gadget key={gadget.id} gadget={gadget}/> 
						)
					})}
			</div>
		)
	}

}


render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Gadgets} />
			<Route path="retningslinjer" component={Retningslinjer} />
		</Route>
	</Router>
), document.getElementById('app'))