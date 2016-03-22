// export function getCards(){
// 	return fetch('/trelloCards')
// 			.then(data => {
// 				return data.json();
// 			})	
// 			.then(jsondata => {
// 				jsondata.map(gadget => {
// 					fetch(`/currentLoaner/${gadget.idChecklists[0]}`)
// 						.then(data => {
// 							return data.json();
// 						})
// 						.then(currentLoanerList => {
// 							console.log('Currrent Loaner List is ', currentLoanerList)
// 							gadget.currentLoanerList = currentLoanerList;
// 						})
// 				})
// 				console.log('JSON data is ', jsondata);
// 				return jsondata;
// 			})
// };

export function getCards(){
	return fetch('/trelloCards')
			.then(data => {
				return data.json();
			})
			.then(dataToFormat => {
				console.log('Original data is ', dataToFormat);

				return dataToFormat.map(gadget => {
					fetch(`/currentLoaner/${gadget.idChecklists[0]}`)
					.then(data => {
						return data.json();
					})
					.then(currentLoanerList => {
						console.log('Currrent Loaner List is ', currentLoanerList);
						gadget.currentLoanerList = currentLoanerList;
					})
				})
			})
			.then(jsondata => {
				console.log('JSON data is ', jsondata);
				return jsondata;
			})
};