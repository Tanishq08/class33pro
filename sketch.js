
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight=300;
var engine,world;
var particles=[];
var divisions=[];
var plinkos=[];
var gameState="play";
var particle=null;
var score=0;
var random;
var count=0;
function preload(){
   
}

function setup() {
	createCanvas(780, 700);
	engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(400,695,800,20);
 
 for (var j=40;j<width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15;j<width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }

  for (var j=40;j<width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }

  for (var j=15;j<width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }

  for (var k=0; k <=width;k=k+59){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();

  textSize(20)
  fill("white")
  text("Score: "+score,20,30);

  textSize(20)
  fill("white")
  text("500",10,420)

  textSize(20)
  fill("white")
  text("500",75,420)
  
  textSize(20)
  fill("white")
  text("500",130,420)
  
  textSize(20)
  fill("white")
  text("500",190,420)
  
  textSize(20)
  fill("white")
  text("500",245,420)

  textSize(20)
  fill("white")
  text("100",310,420)

  textSize(20)
  fill("white")
  text("100",365,420)

  textSize(20)
  fill("white")
  text("100",425,420)

  textSize(20)
  fill("white")
  text("100",485,420)
  
  textSize(20)
  fill("white")
  text("200",548,420)
  
  textSize(20)
  fill("white")
  text("200",605,420)
  
  textSize(20)
  fill("white")
  text("200",665,420)
  
  textSize(20)
  fill("white")
  text("200",725,420)
  
  







 for(var j=0;j<plinkos.length;j++){
   plinkos[j].display()
 }


console.log(mouseX,mouseY)

 
for (var p = 0; p < particles.length; p++) {
   
  particles[p].display();
}

for (var k=0;k<divisions.length;k++){
  divisions[k].display()
}

 if(particle!=null){
  particle.display();
     if (particle.body.position.y>650){
          if(particle.body.position.x<280){
              score=score+500
               particle=null
         
}
  }
 }
 

 if(particle!=null){
     if (particle.body.position.y>650){
          if(particle.body.position.x<525){
              score=score+100
               particle=null
           
}
  }
 }

 if(particle!=null){
     if (particle.body.position.y>650){
          if(particle.body.position.x<750){
              score=score+200
               particle=null
            
               
}
  }
 }


if(count>=5){
gameState="end"
}

if(gameState==="end"){
  textSize(35)
  fill("white")
 text("Game Over",155,205)

}


 // drawSprites();

}	

function mousePressed(){
  console.log("inmousepressed")
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10);
}
  
}




