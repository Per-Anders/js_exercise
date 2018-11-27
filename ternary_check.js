// custom function for get element by id
function id(id){
  return document.getElementById(id);
}

// username array
userNames = ["admin", "root", "user"];
  // prompt ask for username
  var q = prompt("Login");
  // check if the username is in the array indexOf

output = id("output");
var loginOk =  userNames.indexOf(q);
// Hvis vi ikke finner brukernavnet i arrayet vil det returnere -1

// så hvis brukernavnet er i arrayet så må det være mer enn -1
loginOk > -1 ? output.innerHTML = "Logged In!" : output.innerHTML = "Denied!";
