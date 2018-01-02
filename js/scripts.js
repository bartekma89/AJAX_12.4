var button = document.querySelector('#get-joke');
	var paragraph = document.querySelector('#joke');

button.addEventListener('click', function () {
	getJoke();
});

getJoke();

function getJoke() {

	var xhr = new XMLHttpRequest();
	var url = 'http://api.icndb.com/jokes/random';
	var method = 'GET';
	xhr.open(method, url);

	xhr.addEventListener('load', function () {
		if (xhr.status === 200) {
			var responseJSON = JSON.parse(xhr.response);
			paragraph.innerHTML = responseJSON.value.joke;
		}
	});

	xhr.send();

}
