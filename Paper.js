class Paper {

  constructor(x,y,r) {

    var options={ 
      isStatic:false,
      restitution:0.5,
      friction:0,
      density:1.2
    }

    this.body=Bodies.circle(x,y,r/3,options);
    this.radius=r;

    this.image=loadImage("paper.png");

    World.add(world,this.body);

  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();

  }


}