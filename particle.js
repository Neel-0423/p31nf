class Particle {

    constructor(x, y, width, height){
  
        var options = {

         'restitution':1.8,
         'friction':0.3,
         'density':1.0
     
        }
  
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        
        World.add(world,this.body);
        
        this.width = width;
        this.height = height;
        
    }
  
    display() {
        var pos = this.body.position;                                                                                                                                   
        
        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
  
  };