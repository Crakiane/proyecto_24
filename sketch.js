const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var hierro;
var Rubber;
var piebra;

function setup(){
  var canvas = createCanvas(1200, 600);
   engine = Engine.create();
   world = engine.world;

   plane = new Plane(600, height, 1200, 20)
   hammer = new Hammer(10, 100);

   hierro = new metal(50, 5, 400, 30);
   Rubber = new circulo(200, 10, 50, 50);
   piebra = new rocas(10, 5, 400, 5);
}

function draw(){

 background("lightBlue");

    Engine.update(engine);

    plane.display();
    hammer.display();

    hierro.display();
    Rubber.display();
    piebra.display();
}