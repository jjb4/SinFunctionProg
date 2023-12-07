function setup() {
  createCanvas(windowWidth, windowHeight);
sound=loadSound("music_zapsplat_back_to_the_acid_house.mp3", loaded);
  
  
angleMode(DEGREES)
rectMode(CENTER)
  
}
function loaded(){
  sound.play()
}
function draw() {
  background(65,95,206);
  noFill()
  
  translate(width/2,height/2)
  
  for (var i = 0;i<200; i++) {
    push()
    
    rotate(sin(frameCount + i*1.25)*125)
    
    var r = map(sin(frameCount),-1,1,50,255)
    var g = map(cos(frameCount/4),-1,1,50,255)
    var b = map(sin(frameCount/8),-1,1,50,255)
    
    stroke(r,g,b)
    
    rect(0,0,600 - i * 3,600 - i * 3,200 - i)
    
    pop()
  }

}
