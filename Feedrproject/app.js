$(function() {
	var loader = $('.loader');

	var sourceFT = 'financial-times';
	var sourceMshble  = 'mashable';

	var getFeed = function(srcFeed) { $.get('https://newsapi.org/v1/articles?source=' + srcFeed + '&sortBy=top&apiKey=5c04c0ddb47142349f38c1ee3ab6ae32', function(results){
			console.log(results);
			loader.hide();
			$('.feed').empty();
			results.articles.forEach(function(result){
				var url = '<a href="' + result.url + '" target="_blank">';

				if ( result.urlToImage != null ) {
					var img = '<img src="' + result.urlToImage + '" class="thumb">';
				}

				if ( result.description != null ) {
					var desc = '<p class="desc">' + result.description + '</p>';
				} else {
					desc = '';
				}

				$(".feed").append('<div class="row"><div class="col-lg-3"><div class="img-wrap">' + url + img + '</a></div></div><div class="col-lg-9"><h3>' + url + result.title + '</a></h3>' + desc + '</div></div>');

			});
		});
	}

	loader.show();
	getFeed(sourceFT); 
	 
	$('#sources').change(function() {
	    if ($(this).val() === 'default') {
	    	$('body').removeClass();
	    	$('.feed').empty();
	    } else if ($(this).val() === 'ft') {
	    	loader.show();
	    	$('body').removeClass().addClass('ft');
	    	getFeed(sourceFT);
	    } else if ($(this).val() === 'mashable') {
	    	loader.show();
	    	$('body').removeClass().addClass('mashable');
	    	getFeed(sourceMshble);		
	    }

	});
});