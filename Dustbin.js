class Dustbin{
        constructor(x,y,width,height)
        {
            var options = {
                isStatic: true
            }
            var boxBottom = Bodies.rectangle(1100, 747, 100, 20 , {isStatic: true} ); 
            World.add(world,boxBottom);
            
            var boxLeft = Bodies.rectangle(1000, 710, 20, 50 , {isStatic: true} ); 
            World.add(world,boxLeft);
        
            var boxRight = Bodies.rectangle(1200, 710, 20, 50 , {isStatic: true} ); 
            World.add(world,boxRight);
           this.body = Bodies.rectangle(x,y,width,height,options);
        }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
        rect(0,0,this.width,this.height); 
        pop();
    }
}