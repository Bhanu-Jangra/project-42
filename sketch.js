const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella, thunder;
var rain = [];
var maxDrops = 100;
var drop;

function preload(){
    
}

function setup(){
   canvas = createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;


    for(i=0; i<maxDrops; i++){
        rain.push(new Drops(random(0,600),random(0,600)));
    }
    console.log(rain);

    umbrella = new Umbrella(0,0,50);

   Engine.run(engine);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    umbrella.display();

    for(i=0; i<maxDrops; i++){
        rain[i].display();
    }


}   

