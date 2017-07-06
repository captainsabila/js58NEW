window.onload = function() {
	var btn = document.getElementById("button");



	btn.onclick = function(event) {
     	event.preventDefault();
     	var ul = document.getElementById("results");

     	while (ul.hasChildNodes()) {
    		ul.removeChild(ul.lastChild);
		}

     	var integerEntered = +document.getElementById("num").value;

		for (var i = 1; i <= integerEntered; i++) {
			var li = document.createElement("li");

			var fizzbuzz = document.createTextNode("FizzBuzz");
			var fizz 	 = document.createTextNode("Fizz");
			var buzz 	 = document.createTextNode("Buzz");

			if (i % 3 === 0 && i % 5 === 0) {
				li.appendChild(fizzbuzz);
				ul.appendChild(li);

			} else if (i % 3 === 0) {
				li.appendChild(fizz);
				ul.appendChild(li);

			} else if (i % 5 === 0) {
				li.appendChild(buzz);
				ul.appendChild(li);
				
			} else {
				li.appendChild(document.createTextNode(i));
				ul.appendChild(li);
			}
		}

	}

	var number = document.getElementById("num");
	number.onclick = function () {
		number.value = "";
	}


}