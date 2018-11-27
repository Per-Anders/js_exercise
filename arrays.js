var animals = ["cat", "dog", "rabbit", "bird", "lion"];
var randomIndex = Math.floor(Math.random()*animals.length);
var randomAnimal = animals[randomIndex];
var message = prompt("Hvilken index verdi er " + randomAnimal)
var response = (message == randomIndex) ? "Riktig!" : "Feil Det var " + randomIndex
alert(response);
