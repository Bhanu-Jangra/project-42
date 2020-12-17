class Drops{
    constructor(x,y){
        var options = {
            restitution:0.08,
            friction:0.3
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    updateDrops(){
        if(this.body.position.y > 650){
            Matter.body.setPosition(this.body, {x:random(0,600)}, {y:random(0,600)});
        }
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("cyan");
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
        pop();
    }
}