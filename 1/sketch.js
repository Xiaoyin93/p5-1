var table;
var img;
var colorList = [];

function preload() {
  table = loadTable( "data/Assignment619.csv" );
  img = loadImage("data/gray.jpeg");
}

function setup() {

  var canvas = createCanvas(1000, 600);
  // canvas.parent("header");
  console.log(table.getRowCount());
  console.log(table.getColumnCount());

  colorList[0] = color(235,50,90,200);
  colorList[1] = color(40,80,235,200);
  colorList[2] = color(215,220,20,200);

  strokeWeight(0.5);
}

function draw(){
  //background(255);
  image(img, 0,0,width,height);
  var dataTipXY = drawLine();
  dataTip(dataTipXY[0], dataTipXY[1], dataTipXY[2], dataTipXY[3]);
}

function drawLine(){
  var dataTipX = -1;
  var dataTipY = -1;
  var message = "";

  strokeWeight(2);
  //noStroke();
  var markerSize = 10;
  var startPoint =  1500;
  var endPoint = table.getRowCount()-300;
  var XYZ = -1;
  
  noFill();
  beginShape();
  for( i=0; i<table.getRowCount(); i+=10){
    var row = table.getRow(i);
    var ax = row.get(0);// accelerometer x reading
    var timeStamp = i * 200;
    //x-accelerometer
    var y = map(ax, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[0]);
      curveVertex(x,y);
      if(i==0)curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in X+" + ax + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 0;

      }
      
      noStroke();
      fill(colorList[0]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
  }
    var ii = table.getRowCount()-1;
    var row = table.getRow(ii);
    var ax = row.get(0);// accelerometer x reading
    var timeStamp = ii * 200;
    //x-accelerometer
    var y = map(ax, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[0]);
      curveVertex(x,y);
      curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in X+" + ax + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 0;

      }
      noStroke();
      fill(colorList[0]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
      stroke(colorList[0]);
  endShape(OPEN);

  noFill();
  beginShape();
  for( i=0; i<table.getRowCount(); i+=10){
    var row = table.getRow(i);
    var ay = row.get(1);// accelerometer x reading
    var timeStamp = i * 200;
    //x-accelerometer
    var y = map(ay, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[1]);
      curveVertex(x,y);
      if(i==0)curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in Y+" + ay + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 1;

      }
      
      noStroke();
      fill(colorList[1]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
  }
    var ii = table.getRowCount()-1;
    var row = table.getRow(ii);
    var ay = row.get(1);// accelerometer x reading
    var timeStamp = ii * 200;
    //x-accelerometer
    var y = map(ay, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[1]);
      curveVertex(x,y);
      curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in Y+" + ay + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 1;

      }
      noStroke();
      fill(colorList[1]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
      stroke(colorList[1]);
  endShape(OPEN);

  noFill();
  beginShape();
  for( i=0; i<table.getRowCount(); i+=10){
    var row = table.getRow(i);
    var az = row.get(2);// accelerometer x reading
    var timeStamp = i * 200;
    //x-accelerometer
    var y = map(az, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[2]);
      curveVertex(x,y);
      if(i==0)curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in Z+" + az + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 2;

      }
      
      noStroke();
      fill(colorList[2]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
  }
    var ii = table.getRowCount()-1;
    var row = table.getRow(ii);
    var az = row.get(2);// accelerometer x reading
    var timeStamp = ii * 200;
    //x-accelerometer
    var y = map(az, -25, 5, 0, height*0.6);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      stroke(colorList[2]);
      curveVertex(x,y);
      curveVertex(x,y);
      if( mouseX < x + markerSize/2 && mouseX > x - markerSize/2 &&
          mouseY < y + markerSize/2 && mouseY > y - markerSize/2) {
            dataTipX = x;
            dataTipY = y;
            message = "Acceleration in Z+" + az + "m/s^2\n" +
            "Xiaoyin";
            XYZ = 2;

      }
      noStroke();
      fill(colorList[2]);
      ellipse(x,y,markerSize,markerSize);
      noFill();
      stroke(colorList[2]);
  endShape(OPEN);
    
return [dataTipX, dataTipY, message, XYZ]
}

function dataTip(x,y, message, n){
  if(n>=0){
    var boxWidth = 300;
     var boxHeight = 80;
     var by = y-boxHeight/2;
     var bx = x-boxWidth/2;
     by = constrain(by,10,height-boxHeight);
     bx = constrain(bx,10,width-boxWidth);
     fill(255,30);
     stroke(colorList[n]);
     rect( bx, by, boxWidth, boxHeight);
     fill(colorList[n]);
     
     textSize(18);
     text( message,
     bx+20, by+20, boxWidth, boxHeight );
   }
     
}
