import React, {Component} from 'react';
import {render} from 'react-dom';
import BorrowButton from './BorrowButton.jsx';
import {fetchCurrentLoanerList} from './../helpers';
import {postNewLoaner} from './../helpers';
import InputForm from './InputForm.jsx';

class Gadget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gadget: [],
			loaner: "",
			clicked: false
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
		return nextState.loaner !== this.state.loaner || this.state.clicked !== nextState.clicked;
	}

	confirmLoan(event){
		console.log(this.props.gadget.id);
		postNewLoaner(this.props.gadget.id);
	}

	openInput(){
		this.setState({
			clicked: true
		});

		console.log(this.state.clicked);
	}

	renderAvailable(name){
		return this.state.clicked ? <InputForm confirmLoan={() => this.confirmLoan()} /> : <BorrowButton openInput={() => this.openInput()} key={name} name={name}/>
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
