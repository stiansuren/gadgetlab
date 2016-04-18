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
		return currentLoanerList.checkItems[0].name
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