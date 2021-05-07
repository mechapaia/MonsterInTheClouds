class Ball{
    constructor (x,y,width,height,angle){
        var options = {
            frictionAir:0.005,
            density:1.0
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.image = loadImage("images/Superhero-01.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER);
        strokeWeight(4)
        stroke ("green")
        fill ("white")
        image(this.image, 0, 0, this.width + 50, this.height);
        pop()
    }
}
