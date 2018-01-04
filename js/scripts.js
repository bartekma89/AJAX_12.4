var $button = $('#get-joke');
var $paragraph = $('#joke');
var url = 'http://api.icndb.com/jokes/random';

$button.click(getJoke);
getJoke();

function getJoke() {
	$.ajax({
		url: url,
		method: 'get'
	})
		.done(function(response) {
		$paragraph.text(response.value.joke);
	});
}
