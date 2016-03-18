export function getCards(){
	return fetch('/trelloCards')
			.then(data => {
				return data.json();
			})	
			.then(jsondata => {
				jsondata.map(gadget => {
					fetch(`/currentLoaner/${gadget.id}`)
						.then(data => {
							return data.json();
						})
						.then(currentLoaner => {
							// console.log(currentLoaner);
							gadget.currentLoaner = currentLoaner;
						})
				})
				return jsondata;
			})
};