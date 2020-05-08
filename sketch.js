var thickness,wall;
var speed, weight,bullet;
function setup() {
  createCanvas(1600, 400);
	speed=random(223,331)
	weight=random(30,52)
	thickness=random()
	bullet=createSprite(50, 200, 50,50);   
	bullet.velocityX = speed/5;
	bullet.shapeColor=color(255);
  	wall=createSprite(1510,200, 60, height/2)
  	wall.shapeColor=color(80,80,80);
}
function draw() {
  background(0);
  if (hascollided(bullet,wall)) {
	  
		  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness) ;
		  if (damage>10) {
			wall.shapeColor=color(255,0,0)  
		  }
		  if (damage<10) {
			wall.shapeColor=color(0,255,0
				)  
		  }
  }
  drawSprites();
}
function hascollided(bullet,wall) {
	bulletRightEdge=bullet.x+bullet.width;
	wallLeftEdge=wall.x;
	if (bulletRightEdge>=wallLeftEdge) {
		return true;
			}
			return false;
}
``

