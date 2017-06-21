$(function(){
	$('#random-timer-btn').on('click', function(event){
	var randomTime = Math.ceil(Math.random() * (60 * 1000));
	var seconds = Math.ceil(randomTime/1000);
	$('#time').text(seconds);

	var hoffPic = $('<img src="http://place-hoff.com/500/202">');

	var picAdd = function(){ 
		$('#time').text(0);
		$('#random-hoff').append(hoffPic);
		clearInterval(clock);
		clearInterval(randomTimer);
	}

	var randomTimer = setInterval(picAdd,randomTime);
	var clock = setInterval(paintTime,1000);

	function paintTime(){
		seconds = seconds-1;
		$('#time').text(seconds);
		if(seconds <= 0){
			clearInterval(clock);
		}
	}

})
})
