$(function() {
	
  // DOM is now ready
_500px.init({
	sdk_key: '1d81af7693a35887ce191f3fa8f9ba64b50f28ef'
	});
$('#login').click(function(){
	_500px.login();
	});
_500px.on('authorization_obtained', function(){
	console.log("authorized successfully!");
	$('#login').hide();
	$('#loading').hide();

	navigator.geolocation.getCurrentPosition(function(pos){
		console.log(pos);

		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;

		var searchOptions = {
			geo: lat + ',' + long + ',' + '25mi',
			only: 'landscapes',
			image_size: 3,
			rpp: 28,
			sort: 'highest_rating'
		};

		console.log(searchOptions);
		_500px.api('/photos/search', searchOptions, function(resp){
			$('.image-results-view').show();

			var photos = resp.data.photos;
			for (var i = 0; i < photos.length; i++){
				var newImg = $('<img>').attr('src',photos[i].image_url).addClass('image')
				$('.images').append(newImg);
			}
		});
	 });
   })
});
$('#coords').on('click', function(){
			$('#location-finders').hide();
			$('#loading').fadeIn();

			var myCoordinates = $('#my-coordinates').val();

			var coords =  myCoordinates.replace(' ', '').split(',');

			var lat = coords[0];
			var long = coords[1];
			console.log('You are located at ' + lat + ', ' + long +'.');

			var searchOptions = {	
				geo: lat + ',' + long + ',' + '5mi',
				only: 'landscapes',
				image_size: 3,
				rpp: 28,
				sort: 'highest_rating'
			};
 
			if (( lat > -180) && ( lat < 180 ) && ( long > -180 ) && ( long < 180)) { 
				_500px.api('/photos/search', searchOptions, function(resp) {
					$('#loading').hide();
					$('.image-results-view').fadeIn();

					var photos = resp.data.photos;
					for ( var i = 0; i < photos.length; i++ ) {
						var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
						$('.images').append(newImg);
					}
				});
			} else {
				$('#loading').hide();
				$('#instructions').prepend('<b>Those coordinates are invalid. Try again.</b><br><br>')
				$('#location-finders').fadeIn ();
			}
		});
	});		
});