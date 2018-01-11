var elem = document,
		element = elem.getElementById('map'),
		search = elem.getElementById('search'),
		btn = elem.getElementById('btn'),
		h2 = elem.getElementById('h2'),
		lat = elem.getElementById('lat'),
		lng = elem.getElementById('lng'),
		address;

function initMap(location) {
	var myMap = new google.maps.Map(document.getElementById('map'), {
		center: location,
		scrollwheel: true,
		zoom: 7
	});
	var marker = new google.maps.Marker({
		position: location,
		map: myMap,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
	var InfoWindow = new google.maps.InfoWindow({
		content: address
	});

	marker.addListener('click', function () {
		InfoWindow.open(myMap, marker);
	});
}

search.onkeyup = function () {
	if(this.value) {
		h2.textContent = this.value;
	} else if(this.value === '') {
		h2.textContent = 'google map';
	}
};

btn.onclick = function () {
	var location = {},
			urlStr = 'https://maps.googleapis.com/maps/api/geocode/json?address=${' + search.value + '},&key=AIzaSyCGHvnLuZADW8_pWQYz15ZBhvFvWkr6jPQ';

	jQuery.get(urlStr, function (data) {
		if (data.status === 'OK') {
			location = data.results[0].geometry.location;
			address = data.results[0].formatted_address;
			lat.textContent = 'долгота: ' + location.lat + ', ';
			lng.textContent = 'широта: ' + location.lng;
			initMap(location);
		} else {
			h2.textContent = 'Введите правильно название населённого пункта!';
		}
	});
};