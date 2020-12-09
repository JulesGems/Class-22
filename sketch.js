const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options = {
    isStatic: true
  }
  var object_options = {
    restitution: 1.0
  }
  object=Bodies.circle(200, 100, 20, object_options);
  ground=Bodies.rectangle(200, 375, 400, 50, ground_options);
  World.add(world, object);
  World.add(world, ground);
  console.log(object);
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  stroke("gold");
  strokeWeight(4);
  fill("green");
  rect(ground.position.x, ground.position.y, 400, 50);
  ellipseMode(RADIUS);
  stroke("red");
  strokeWeight(7);
  fill("silver");
  ellipse(object.position.x, object.position.y, 20, 20);
}