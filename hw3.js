var bottleN
for (var beer = 99; beer >= 1; beer = beer - 1)
 {
	if (beer == 1) {
		bottleN = 'bottle';
	} else { 
		bottleN = 'bottles'
	}
	console.log(beer + " " + bottleN + " of beer on the wall, " + beer + " " + bottleN + " of beer");
if (beer < 99) {
console.log("Take one down, pass it around, " + beer + " " + bottleN +" of beer on the wall.");
};
if (beer == 1) 
{
console.log ("No more bottles of beer on the wall, no more bottles of beer.");
}
}

