// array access methods....
var animals = ["cat", "dog", "lion", "bird"];

var q = prompt("what did you want to look for?");
var p  = animals.indexOf(q);
var message = p > -1 ? "Found" : "Not there";
console.log(message);

// animals.slice(1,2); //returnerer valgte index

// animals.include("dogs");
