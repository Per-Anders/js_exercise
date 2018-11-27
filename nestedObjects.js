// object
var bob = {
  age:30,
   hair: "brown",
   eyes: "blue",
   works: "developer"
 }

 // nested objects
var friends = {
  friend1: bob, // the declared object bob
  friend2: { // object in an object
    age: 32,
    name: "siri",
    status: "friend"
  }
};

// getting the haircolor of bob from the object
console.log(friends.friend1.hair);



var friends1 = [bob, {age:30, hair: "black"}];
// gettting the age of bob from the array
console.log(friends1[0].age);
