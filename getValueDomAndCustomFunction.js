// get and store the output value to var o
var o = document.getElementById("output").innerText;

// get the input
var a = document.getElementById("val");

// set the input to o variable width the value method
a.value = o;

// create my own function for getting the id
function getId(string){
  return document.getElementById(string);
}

// Call my custom getId function
var a = getId("output");
console.log(a);
