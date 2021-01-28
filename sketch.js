
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2,bobObject3,bobObject5,bobObject4;
var roofObject1,rope1;
function preload()
{
	
}

function setup() {
	
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;
bobObject1= new Bob(140,250,40);
bobObject2= new Bob(180,250,40);
bobObject3= new Bob(220,250,40);
bobObject4= new Bob(260,250,40);
bobObject5= new Bob(300,250,40);
roofObject1= new Roof(220,100,200,20);
rope1= new Rope(bobObject1.body,roofObject1.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#DCDCDC");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();  
 roofObject1.display();
 rope1.display();
}



