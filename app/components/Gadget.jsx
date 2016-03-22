import React, {Component} from 'react';
import {render} from 'react-dom';
import BorrowButton from './BorrowButton.jsx';
import {fetchCurrentLoanerList} from './../helpers';

class Gadget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gadget: [],
			loaner: ""
		}
	}

	fetchLoaner() {
		fetchCurrentLoanerList(this.props.gadget.idChecklists[0])
			.then(loaner => {
				this.setState({
					loaner
				});
			})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.loaner !== this.state.loaner;
	}

	renderAvailable(name){
		return <BorrowButton key={name} name={name}/>
	}

	renderBorrowed(){
		this.fetchLoaner();

		return <h4>Lånes av {this.state.loaner}</h4>
	}

	render(){
		const {name, desc, badges: {checkItems, checkItemsChecked}} = this.props.gadget;

		return (
			<div className='gadget'>
				<h3>{name}</h3>
				<p>{desc}</p>
				{checkItems === checkItemsChecked ? this.renderAvailable(name) : this.renderBorrowed()}
			</div>
		)
	}
}

export default Gadget
