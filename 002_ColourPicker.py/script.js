function changeColour() {
    let red = Number(document.getElementById('red').value).toString(16);
    let green = Number(document.getElementById('green').value).toString(16);
    let blue = Number(document.getElementById('blue').value).toString(16);
    let colour = "#" + red + green + blue;
    document.getElementById("colour_mix").innerHTML = colour;
    document.getElementById("display").style.background = colour;
    document.getElementById("colour_mix").style.color = colour;

}
document.getElementById("red").addEventListener('touchmove', changeColour);
document.getElementById("blue").addEventListener('touchmove', changeColour);
document.getElementById("green").addEventListener('touchmove', changeColour);
document.getElementById("red").addEventListener('mousemove', changeColour);
document.getElementById("blue").addEventListener('mousemove', changeColour);
document.getElementById("green").addEventListener('mousemove', changeColour);