const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;

function preload()
{
 	
}

function setup() {
	createCanvas(1500, 800);
 
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,770,width,20);
	paper = new Paper(100,600);
	dustbin = new Dustbin(1200,710);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
      Matter.Body.applyForce(paper.body,paper.position,{x:5,y:-5});
	}
}