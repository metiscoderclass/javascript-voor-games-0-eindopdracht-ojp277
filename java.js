var xCar = 50; //Meest links boven
var yCar = 100; //Meest links boven
var xSize = 200;
var ySize = 180;
var wheelSize = 24;

function setup() {
  createCanvas(xSize, ySize);
  background(220);
}

function draw() {
    noStroke();
    fill(13, 48, 0);
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    strokeWeight(2);
    fill(12, 66, 66);
    rect(xCar + 20, yCar + 10, wheelSize, wheelSize);
    rect(xCar + 15, yCar + 10, wheelSize, wheelSize);
    rect(xCar + 60, yCar + 10, wheelSize, wheelSize);
    rect(xCar + 50, yCar + 10, wheelSize, wheelSize);
    rect(xCar + 40, yCar + 10, wheelSize, wheelSize);
    stroke(0); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2);
    //'width' is de breedte van je canvas
};
