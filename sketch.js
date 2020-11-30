const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
	engine = Engine.create();
	world = engine.world;

floor = new Ground(240,800,480,20);


// creating divisions
for( var i = 80 ; i <= width - 80 ; i = i + 80){
  divisions.push(new Division(i , height - divisionHeight/2,10,divisionHeight));
}
  // first row of plinkos
for( var k = 40; k <=width ; k = k + 50){
  plinkos.push( new Plinko(k , 75 , 10));
}
// second row of plinkos
for( var k = 65; k <=width - 20 ; k = k + 50){
  plinkos.push( new Plinko(k , 175 , 10));
}

// third row of plinkos
for( var k = 40; k <=width ; k = k + 50){
  plinkos.push( new Plinko(k , 275 , 10));
}

// fourth row of plinkos
for( var k = 65; k <=width - 20 ; k = k + 50){
  plinkos.push( new Plinko(k , 375 , 10));
}

// creating partcles
if(frameCount % 90 === 0){
  particles.push(new Particle(40,10,10));
}

Engine.run(engine);
}

function draw() {
 
  background("black");  

 console.log(frameCount);

  floor.display();
  



  for( var i = 0 ; i < divisions.length ; i++){
divisions[i].display();
  }

  for( var k = 0 ; k < plinkos.length ; k++){
    plinkos[k].display();
      }

      for( var j = 0 ; j < particles.length ; j++){
        particles[j].display();
          }
}