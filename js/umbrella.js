class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:false
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.animation = loadAnimation("images/Walking Frame/walking_1.png",
        "images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png",
        "images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_5.png",
        "images/Walking Frame/walking_6.png",
        "images/Walking Frame/walking_7.png",
        "images/Walking Frame/walking_8.png");
        World.add(world, this.body);
    }
    display(){

        animation(this.animation,200,350,10,10);
        animation.scale = 0.01;
        

    }
}