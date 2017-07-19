var data = [ {name:'dave', age:11, country: 'usa'},  { name: 'steph', age: 15, country: 'canada'}]
undefined
data
(2) [Object, Object]0: Objectage: 11country: "usa"name: "dave"__proto__: Object1: Objectage: 15country: "canada"name: "steph"__proto__: Objectlength: 2__proto__: Array(0)
"name,age,country\ndave,11,usa\nsteph,15,canada"
"name,age,country
dave,11,usa
steph,15,canada"
var csvContent = "data:text/csv;charset=utf-8,";
data.forEach(function(infoArray, index){

   dataString = infoArray.join(",");
   csvContent += index < data.length ? dataString+ "\n" : dataString;

}); 
VM1131:4 Uncaught TypeError: infoArray.join is not a function
    at <anonymous>:4:27
    at Array.forEach (<anonymous>)
    at <anonymous>:2:6
(anonymous) @ VM1131:4
(anonymous) @ VM1131:2
var csvString = "name,age,country\ndave,11,usa\nsteph,15,canada"
undefined
var csvContent = "data:text/csv;charset=utf-8,";

undefined
var encodedUri = encodeURI("data:text/csv;charset=utf-8,"+csvString);
window.open(encodedUri);
Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
var csvString = "name,age,country\ndave,11,usa\nsteph,15,canada"
undefined
"data:text/csv;charset=utf-8,"
"data:text/csv;charset=utf-8,"
csvString = "data:text/csv;charset=utf-8,name,age,country\ndave,11,usa\nsteph,15,canada""
VM1193:1 Uncaught SyntaxError: Invalid or unexpected token
csvString = "data:text/csv;charset=utf-8,name,age,country\ndave,11,usa\nsteph,15,canada"
"data:text/csv;charset=utf-8,name,age,country
dave,11,usa
steph,15,canada"
var csvString = "name,age,country\ndave,11,usa\nsteph,15,canada"
undefined
csvString
"name,age,country
dave,11,usa
steph,15,canada"
var data = [ {name:'dave', age:11, country: 'usa'},  { name: 'steph', age: 15, country: 'canada'}]
undefined
Object.keys(data[0]);
(3) ["name", "age", "country"]
Object.keys(data[0]).join(',');
"name,age,country"
data.forEach(function(i) { console.log(i) });
VM1465:1 Object {name: "dave", age: 11, country: "usa"}
VM1465:1 Object {name: "steph", age: 15, country: "canada"}
undefined
data.forEach(function(i) { console.log(i.name + ',' + i.age + ',' + i.country + '\n') });
VM1487:1 dave,11,usa

VM1487:1 steph,15,canada

undefined
csvString
"name,age,country
dave,11,usa
steph,15,canada"
var encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvString);
window.open(encodedUri);


Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}