//Kayla Tsui, NeXTCS Period 10, Due Date: 10/20/2021, Project 00 Time Variance/Clock
var h, m, s;
var cx, cy, theta, diameter, sradius, sradians, mradius, mradians, hradius, hradians;
function setup () {
  createCanvas (400, 400);
  h =  hour(); 
  m = minute(); 
  s = second();
  cx = width/2;
  cy = height/2;
  diameter = 300;
  sradius = (diameter / 2.0) * 0.72;
  mradius = (diameter / 2.0) * 0.6;
  hradius = (diameter / 2.0) * 0.5; 
}

function draw () {
  background (0, 0, 139);
  fill(173, 216, 230);
  clockFace( cx, cy, diameter);
  timeToAngle (h, m, s);
  //black line represents hour hand, purple represents minute, and red represents second 
  stroke (0, 0, 0); 
  strokeWeight(6);
  drawHand (cx, cy, hradians, 40.0);
  stroke (128, 0, 128);
  drawHand (cx, cy, mradians, 100.0);
  strokeWeight(2);
  stroke(255, 0, 0); 
  drawHand (cx, cy, sradians, 70.0);
  updateTime(); 
  minTicks();
  fill(255);
  textSize(35);
  text(hour() - 12 + ":", 100, 390);
  text(minute() + ":", 150, 390);
  text("  " + second(), 200, 390);
  fill(0);
  textSize(20);
  text(12, cx - 10, cy - 120);
  text(3, cx + 120, cy);
  text(6, cx - 5, cy + 135);
  text(9, cx - 135, cy);
}

function timeToAngle (h, m, s){
  if ( h > 12) {
    h = h - 12;
  }
  hradians = radians((h * 30) - 90);
  sradians = radians((s * 6) - 90);
  mradians = radians ( (m * 6) - 90); 
  updateTime();
  return(hradians);
}
function drawHand (cx, cy, clockTime, lineradius) {
  //Uses the hradians from timeToAngle as clockTime
  line (cx, cy, cx + cos(clockTime) * lineradius, cy + sin(clockTime) * lineradius); 
}
function clockFace (cx, cy, diameter){
  circle (cx, cy, diameter); 
}
function updateTime () {
  s = second();
  h = hour();
  m = minute(); 
}
//minute ticks on the clock (optional) 
function minTicks() {
  strokeWeight(2);
  beginShape(POINTS);
  for (a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * sradius;
    var y = cy + sin(angle) * sradius;
    vertex(x, y);
  }
  endShape();
}
