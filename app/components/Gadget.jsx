import React, {Component} from 'react';
import {render} from 'react-dom';
import BorrowButton from './BorrowButton.jsx'

class Gadget extends Component {
	renderAvailable(name){
		return <div><h4>Tilgjengelig</h4><button>Lån {name}</button></div>
	}

	renderBorrowed(){

		return <BorrowButton/>
	}

	render(){
		const {name, desc, badges:{checkItems, checkItemsChecked}} = this.props.gadget;
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