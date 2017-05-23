import 'isomorphic-fetch';

export function getCards(){
	return fetch('/trelloCards')
	.then(data => {
		return data.json();
	})
	.then(jsonData => {
		return jsonData;
	})
};

export function fetchCurrentLoanerList(id) {
	return fetch(`/currentLoaner/${id}`)
	.then(data => {
		return data.json();
	})
	.then(currentLoanerList => {
		return currentLoanerList.checkItems[currentLoanerList.checkItems.length-1].name
	})
}

export function postNewLoaner(id){
	return fetch(`/postName/:id/`, {
		method: "POST",
		body: JSON.stringify({name: "Markus"})
	})
	.then(data => {
		return console.log(data)
	})
}


export function getRetningslinjer(){
	return fetch('/getRetningslinjer')
	.then(data => {
		return data.json();
	})
	.then(jsonData => {
		return jsonData;
	})
}

export function getEmail(){
	return fetch('/getEmail')
	.then(data => {
		return data.json();
	})
	.then(jsonData => {
		return jsonData;
	})
}
