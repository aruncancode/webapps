// let input = document.querySelectorAll("input");

// for (var i = 0; i < input.length; i++) {
//     input[i].addEventListener("input", set)
// }


// function set() {
//     var red = document.getElementById("red").value;
//     var green = document.getElementById("green").value;
//     var blue = document.getElementById("blue").value;
//     var display = document.getElementById("display");
//     display.style.background = "rgb(" + red + " , " + green + ", " + blue + ")";
//     console.log(red, green, blue)
// }

var red = document.getElementById("red").value;
var green = document.getElementById("green").value;
var blue = document.getElementById("blue").value;
var display = document.getElementById("display");
console.log(blue)
display.style.background = "rgb(" + red + " , " + green + ", " + blue + ")";
window.clearInterval(1000)
// console.log(red)
