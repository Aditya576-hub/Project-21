var bullet, wall;
var speed, wieght;
var thickness;

function setup() {
  createCanvas(1300,600);
  bullet = createSprite (50,250,50,20)
  bullet.shapeColor = "white"
  wall = createSprite (1200,250,thickness,height/2)
  wall.shapeColor = (80,80,80)
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black"); 
  bullet.velocityX = speed; 
  /*if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX = 0;
  var deformation = 0.5 * bulletweight * bulletspeed * bulletspeed/22509;
  if (deformation>180) {
   bullet.shapeColor = "red"
  }
  if (deformation<180 && deformation>100) {
   bullet.shapeColor = "yellow"
  }
  if (deformation<100) {
   bullet.shapeColor = "green"
  }*/

if (hasCollided(bullet, wall)) {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if (damage>10) {
    wall.shapeColor = color(255,0,0);
  }

  if (damage<10) {
    wall.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided (Bullet, Wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
    return false;
}