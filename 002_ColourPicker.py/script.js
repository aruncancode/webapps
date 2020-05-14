document.getElementById('colour_mix').innerHTML = "hello"

function changeColour() {
    let display = document.getElementById("display");
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
    display.style.backgroundColor = colour
    document.getElementById("colour_mix").innerHTML = "#" + colour;

}

document.getElementById("red").addEventListener('click', changeColour);
document.getElementById("blue").addEventListener('input', changeColour);
document.getElementById("green").addEventListener('input', changeColour);