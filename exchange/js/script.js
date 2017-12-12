var elem = document,
 		search = elem.getElementById('search'),
 		btn = elem.getElementById('btn'),
 		list = elem.getElementById('list');

btn.onclick = function() {

	$.ajax({
			type: 'GET',
			url: 'https://community-bitcointy.p.mashape.com/convert/10/' + search.value,
			headers: {
				'X-Mashape-Key': 'LA2QJLX5BGmsh8TYRxMb8VZhmKlCp12u5YwjsnyU1MnL0kn297'
			}
	}).done(function(data) {
			h1.textContent = 'Rate Bitcoin => ' + data.currency + ': ' + data.value;
	});

};

list.onclick = function(e) {
	search.value = e.target.textContent;
};