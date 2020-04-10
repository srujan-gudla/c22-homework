
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
var box
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground=new Ground(200,370,400,10);
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
    }
}
 
function draw() {
    background(0);
    Engine.update(engine);
    // Draw all the elements including the slider that 
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    for(var i=0;i<boxes.length;i=i+1){
        boxes[i].display();
    }
    ground.display();
 
    // Use a for loop to show all the boxes
}
 

