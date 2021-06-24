const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball;
let arrl,arrr;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
 var opt = {
    frictionAir: 1,
    restitution: 0.05
    //density: 5
  }
  ball = Bodies.circle(200,200,10,opt);
  World.add(world,ball);
  arrl = createImg("up.png");
  arrl.position(200,200);
  arrl.size(30,30);
  arrl.mouseClicked(hforce)
  arrr = createImg("right.png");
  arrr.position(100,300);
  arrr.size(30,30);
  arrr.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10);
  Engine.update(engine);
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y: 0});
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0.05,y:0},{x:0,y: - 0.01});
}