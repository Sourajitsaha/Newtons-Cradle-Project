
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
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
rope1= new Rope(bobObject1.body,roofObject1.body,-80,0)
rope2= new Rope(bobObject2.body,roofObject1.body,-40,0)
rope3= new Rope(bobObject3.body,roofObject1.body,-0,0)
rope4= new Rope(bobObject4.body,roofObject1.body,40,0)
rope5= new Rope(bobObject5.body,roofObject1.body,80,0)
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
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
  if(keyCode ===UP_ARROW  ){ 
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:45, y:-45})
    //Matter.Body.applyForce(bobObject2.body, bobObject2.body.position, {x:75, y:-75})
    //Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, {x:75, y:-75})
    //Matter.Body.applyForce(bobObject4.body, bobObject4.body.position, {x:75, y:-75})
    //Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:75, y:-75})
  }
}



