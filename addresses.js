var Street = ['Main', 'Pain', 'Gain', 'Train', 'Slain'];
var randStreet = Street[Math.floor(Math.random() * Street.length)];
var City = ['Joburg', 'Goburg', 'Doughburg', 'Showburg'];
var randCity = City[Math.floor(Math.random() * City.length)];
var State = ['NY', 'GA','NJ', 'ID', 'CA','PA'];
var randState = State[Math.floor(Math.random() * State.length)];
var buildingNumber = Math.floor(Math.random()*100+1);
console.log(buildingNumber + " " + randStreet + " Street, " + randCity + ", " + randState);

