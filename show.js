var automatonCells;
var aCells = [];
var team1 = [];
var team2 = [];
var scl = 20;
var cellCount = 50;


//todo
// create seperate arrays for prey and predators
// fix movment so that diagnol is allowed
// spawning rates
// make it so that prey run away
// delete automatons from array rather than not showing
// make code cleaner in general







function setup(){
  createCanvas(600, 400);
  //automatonCells = new automatons();
  frameRate(10);
  createCells();
}

function createCells(){
  for(var i=0; i<cellCount; i++){
    aCells[i] = new automatons();
  }
}

function createChild(cr){
  //console.log("check");
  cellCount++;
  aCells[cellCount-1] = new automatons();
  aCells[cellCount-1].color = cr;
  cellCount++;
  aCells[cellCount-1] = new automatons();
  aCells[cellCount-1].color = cr;
  cellCount++;
  aCells[cellCount-1] = new automatons();
  aCells[cellCount-1].color = cr;

}

function draw(){
  background(100);
  noStroke();
  for(var i=0; i<cellCount; i++){
    //fix this
    var nearest = 600*600+400*400;
    var index = -1;
    var toEat = -1;
    for(var j=0; j<cellCount; j++){
      if(aCells[i].color>1 && aCells[j].strength>0){
        var distance = dist(aCells[i].x, aCells[i].y, aCells[j].x, aCells[j].y);
        if(aCells[j].color<=1 && distance<nearest){
          if(distance==0){
            console.log("ate");
            toEat = j;
          }else{
            nearest = dist;
            index = j;
          }
        }
      }
    }
    aCells[i].update();
    if (index!=-1){
      if(aCells[index].x>aCells[i].x){
        aCells[i].x += scl;
      }else if(aCells[index].x<aCells[i].x){
        aCells[i].x -= scl;
      }else if(aCells[index].y>aCells[i].y){
        aCells[i].y += scl;
      }else if(aCells[index].y<aCells[i].y){
        aCells[i].y -= scl;
      }
    }
    if(toEat!=-1){
      aCells[toEat].strength = 0;
    }
    if(aCells[i].strength==400) createChild(aCells[i].color);
    aCells[i].show();
  }
}
