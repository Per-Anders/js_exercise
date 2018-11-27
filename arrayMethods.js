var animals = ["dog", "cat", "lion", "zebra"];
var startVal = animals.length -1;
animals[20] = "cheetah";

animals.fill("fish",startVal, animals.length-1);




// document.write(animals.sort().reverse());
