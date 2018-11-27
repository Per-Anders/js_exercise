var nums = [12,3,3,21,21412,3213213,213,213,1232,21,332,32];
nums.sort();
var q = Number(prompt("Hva vil du fjerne?"));
var finder = nums.indexOf(q); // lagrer svaret i variabel finder. eg: finder = svar

var v = (finder > -1) ? nums.splice(finder, 1) : false;
console.log(v);
console.log(nums);
