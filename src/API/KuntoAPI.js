 const url = 'http://localhost:8080';

export function haeKaikkiTiedot(callback) {
	fetch(url + "/kunto/all", {
		method: "GET"
	})
	.then ((response) => response.json())
	.then ((responseJson) => {
		callback(responseJson, responseJson.status);
	})
	.catch(function(error)	{
		callback(null, 503);
	})
}

export function lisaaTietoKantaan(tieto, callback) {
	fetch(url + "/kunto/add", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(tieto)
	})
	.then (function (response) {
		callback(response.status);
	})
	.catch(function(error)	{
		callback(503);
	})
}
