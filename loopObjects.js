var person  = {
  heigth: "180cm",
  weight: "80kg",
  eyecolor: "blue",
  sex: "male",
  name: "Bob"
}

  // legger til en properties
  person.Age = 30;

// loope gjennom objektet
for(var properties in person){

  console.log(properties); // egenskaper - properties
  console.log(person[properties]); // verdiene som er assosiert med egenskapene

  // print til skjerm
  document.write(properties + ": " + person[properties] + "<br>");


}
