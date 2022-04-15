

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var radius=40;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
 var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	destiny:1.2
}
ball=Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball);

groundObj= new Ground(width/2,670,width,20);
leftSide =new Ground(500,600,20,120);
rightSide =new Ground(650,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y,radius.radius);
  
groundObj.display();
leftSide.display();
rightSide.display();  
 
  //drawSprites();

 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}
