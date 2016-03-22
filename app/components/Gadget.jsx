import React, {Component} from 'react';
import {render} from 'react-dom';
import BorrowButton from './BorrowButton.jsx';

class Gadget extends Component {
	renderAvailable(name){
		return <BorrowButton key={name} name={name}/>
	}

	renderBorrowed(currentLoanerList){
		console.log(currentLoanerList);
		return <h4>Lånes av {currentLoanerList}</h4>
	}

	render(){
		const {name, desc, badges:{checkItems, checkItemsChecked}, currentLoanerList} = this.props.gadget;
		return (
			<div className='gadget'>
				<h3>{name}</h3>
				<p>{desc}</p>
				{checkItems === checkItemsChecked ? this.renderAvailable(name) : this.renderBorrowed(currentLoanerList)}
			</div>
		)
	}
}

export default Gadget