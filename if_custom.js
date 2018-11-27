// if statements

// setter a = 3 i minnet;
var a = 3;

// lager custom funksjon for å få tak i element med id parameter
function id(i){
  return document.getElementById(i);
}

// custom funksjon som tar en et argument
function stmt(s){
  // returnerer custom funksjon id med argument o og setter innholdet til S argument
  return id("o").innerHTML = s;
}


if(a === 3){
  // hvis a er kjør denne koden
  // kaller custom stmt funksjon og sender inn string "true"
  stmt("True");
} else {
  // Hvis ikke, kjør denne koden
  // kaller stmt og sender inn False
  stmt("False");
}
