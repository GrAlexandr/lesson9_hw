var elem = document,
 		search = elem.getElementById('search'),
 		btn = elem.getElementById('btn'),
 		list = elem.getElementById('list');

btn.onclick = function() {

	if(search.value === '') {
		alert('Enter the name of the currency');
		return;
	}

	$.ajax({
			cache: false,
			type: 'GET',
			url: 'https://community-bitcointy.p.mashape.com/convert/1/' + search.value,
			headers: {
				'X-Mashape-Key': 'LA2QJLX5BGmsh8TYRxMb8VZhmKlCp12u5YwjsnyU1MnL0kn297'
			}
	}).done(function(data) {
			h1.textContent = 'Rate Bitcoin => ' + data.currency + ': ' + data.value;
	}).fail(function() {
		console.log('fail', arguments);
	});

};

list.onclick = function(e) {
	search.value = e.target.textContent;
};