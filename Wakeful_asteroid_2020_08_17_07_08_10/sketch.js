function setup() {
  createCanvas(500, 400, WEBGL);
 
 
  
}

function draw() {
  background("black");

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  
  pointLight(0, 0, 255, locX, locY, 100);

  
  normalMaterial();
  translate(0, 0, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cone(65, 70);
  pop();
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(70, 70);
  pop();
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(75, 100);
  pop();

  
  
  
  translate(90, -70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cone(20, 70);
  pop();
  
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(20, 70);
  pop();
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(75, 80);
  pop();
  
  translate(-180, -140, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cone(20, 70);
  pop();
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(20, 70);
  pop();
  translate(0, 70, 0);
  push();
  rotateX(60);
  specularMaterial(250);
  cylinder(75, 80);
  pop();



}