const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine,world;

var ground2;
var ground;

var plinkos = [];
var divisions=[];

var particle;

var gamestate="play";

var divisionHeight=300;

var score =0;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //  ground2= new Ground(390,500,800,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  

  if(gamestate === "play"){
    Engine.update(engine);
 
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle !== undefined && particle !== null){
    particle.display();
    console.log(particle.body.position)
    if(particle.body.position.y>760){

     if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      
     }
    }
  }


  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>301 && particle.body.position.x<600 ){
      score=score+100;
      particle=null;
     }
    }

    
  }

  
  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>601 && particle.body.position.x<900 ){
      score=score+1000;
      turn++
      particle=null;
      
     }
    }
  }
  }
 
  if(turn===30){
    gamestate="end";
  }
  if(gamestate === "end"){
    text("GameOver",400,400)
  }


  text("Score : "+score,20,30);
  text("turns"+turn,0,100);
  //ground2.display();

}


function mousePressed(){
  if(gamestate !== "end"){
   
    particle=new Particle(mouseX,10,10);
    particle.display();
    //console.log(particle.body.position.y)
   //console.log("x"+particle.body.position.x)
  }
}