$(function () {
	var output = $('#output');

	$('#searchTerm').keypress(function (e) {
		if(e.keyCode === 13) {
				var searchTerm = $('#searchTerm').val();
				var urlStr = 'https://ru.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
				$.ajax({
					url: urlStr,
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					async: false,
					dataType: 'json',
					success: function (data, status, jqXHR) {
						output.html();
						for (var i = 0; i < data[1].length; i++) {
							output.prepend('<div><div class="text"><a href=' + data[3][i] + '><h2>' + data[1][i]+ '</h2>' + '<p>' + data[2][i] + '</p></a></div> </div>')
						}
					}
				})
		}
	});

	$('#search').on('click', function () {
		var searchTerm = $('#searchTerm').val()

		if(searchTerm === '') {
			alert('Enter the data!');
			return;
		}

		var urlStr = 'https://ru.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
		$.ajax({
			url: urlStr,
			type: 'GET',
			contentType: 'application/json; charset=utf-8',
			async: false,
			dataType: 'json',
			success: function (data, status, jqXHR) {
				output.html();
				for (var i = 0; i < data[1].length; i++) {
					output.prepend('<div><div class="text"><a href=' + data[3][i] + '><h2>' + data[1][i]+ '</h2>' + '<p>' + data[2][i] + '</p></a></div> </div>')
				}
			}
		})
			.done(function () {
				console.log( "success" );
			})
			.fail(function() {
				console.log( "error" );
			})
			.always(function() {
				console.log( "finished" );
			});
	})
});
