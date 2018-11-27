// get the value from the output id element
var number = document.getElementById("output")
var numberContent = number.innerHTML;

// get the add button
var addBtn = document.getElementById("addBtn");
// get the sub button
var subBtn = document.querySelector("#subBtn");

// attach event handler to the add button
addBtn.addEventListener("click", function(){
  // increment by 1
  numberContent++
  // print the value to the number object div
  number.innerHTML = numberContent;
});

// attach eventlistener to the sub button
subBtn.addEventListener("click", function(){
  // decrement by 1
  numberContent--
    // print the value to the number object div
  number.innerHTML = numberContent;
});
