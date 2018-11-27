// multidimentional arrays / nested arrays


var animals = [
              ["cat", "dogs", "lion", "fish"],
              ["zebra", "ant", "elephant"]
            ];

            // console.log(animals[0][1]);
            // console.log(animals[1][2]);

var people = [["mike", "john"], [1980,2001]];
var q = prompt("Hvilken person?");
console.log(people[0][q] + "Når møtte du de?" + people[1][q]);
