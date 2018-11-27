// setter a = 3
var a  = 3;

// custom function for console.log
function log(s){
  return console.log(s);
}

// ternary operator
a === 3 ? log("a er lik 3")  : log("a er ikke lik 3");

// custom function for get element by id
function id(id){
  return document.getElementById(id);
}

// get the output id with custom function
var output = id("output");
console.log(output)
