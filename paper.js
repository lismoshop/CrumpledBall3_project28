class Paper
{
    constructor(x, y)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.body);
        
    }

    display(){      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}