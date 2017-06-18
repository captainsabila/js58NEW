/*I am unable to marry the timer to display a random image. I can start a timer upon clicking a button. 
I can also generate an image upon clicking a button. */ 

//starting a random timer, which unfortunately resets after hitting zero. 

$(function(){
	$('#random-timer-btn').on('click', function(event){

	function startTimer(duration, display) {
    event.preventDefault();
    var timer = duration, seconds;
   

    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ?  seconds : seconds; 

        display.text(seconds);

        if (--timer < 0) {
            timer = duration;
            //var hoffPic = $('<img src="http://place-hoff.com/500/202">');
			//$('#random-hoff').append(hoffPic);
        }
    }, 1000);
}

$(function ($) {
        display = $('#time');
    var randomTime = Math.ceil(Math.random() * 10000);
    startTimer(randomTime, display);  
})
})
})

$(function(){
	$('#random-timer-btn').on('click', function(event){
	var hoffPic = $('<img src="http://place-hoff.com/500/202">');
	$('#random-hoff').append(hoffPic)
})
})
