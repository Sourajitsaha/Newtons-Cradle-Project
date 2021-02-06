class Bob{
    constructor(x,y,radius){
var Bob_options={
  restution:0.3,
  friction:0.5,
  density:1.2
        }
   this.body=Bodies.circle(x,y,radius/2,Bob_options);
   this.radius=radius;
   World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        fill("#DB1575");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
};