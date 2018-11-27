var animals = ["cat", "dog", "horse", "lion", "mouse"];
animals[10] = "horse";
animals.fill("fish", 4,10)
animals.reverse();
animals.pop();
animals.push("sheep");

console.log(animals);
