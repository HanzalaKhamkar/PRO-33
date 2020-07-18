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


    for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50)  {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("lightblue");
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
      turn++
      particle=null;
      
     }
    }
  }


  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>301 && particle.body.position.x<600 ){
      score=score+100;
      turn++
      particle=null;
     }
    
    }
    
  }

  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>601 && particle.body.position.x<900 ){
      score=score+200;
      turn++
      particle=null;
      
     }
   
    }
  
  }
  
}

  if(score === 4000) {
    gamestate = "win";
  }

  if(gamestate == "win") {
    text("You Win", 400, 400);
  }

 
  if(turn===10){
    gamestate="end";
  }
  if(gamestate === "end"){
    text("GameOver",400,400)
  }

  text("Score : "+score,20,30);
  text("turns"+turn,0,100);

  stroke(" purple");
  fill("lightgreen");
  text("PLINKO GAME", 350, 30);
  text("----------  ---------", 350, 40);
  text("----------  ---------", 350, 50);

  fill("black");
  text("Play and get free rewards...", 540, 30);

  text("-----------------------------------", 540, 40);
  text("-----------------------------------", 540, 50);

  fill ("green");
  text("500", 25, 520);
  text("500", 105, 520);
  text("500", 185, 520);
  text("500", 265, 520);

  text("100", 345, 520);
  text("100", 425, 520);
  text("100", 505, 520);

  text("200", 585, 520);
  text("200", 665, 520);
  text("200", 745, 520);

  //ground2.display();

}

function mousePressed(){
  if(gamestate !== "end"){
   
    text("GameOver",400,400);

    particle=new Particle(mouseX,10,10);
    particle.display();
    
  }
}