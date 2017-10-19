var generation = [];
var nextGeneration = [];
var scl = 10;
var count = 0;
var neighbors = 0;
var fRate = 20;
var stop = true;

//example 0 -> game of life 1-> fire
var example = 1;

//starting pattern for game of life
var randomStart = false;
var pulsar = false;
var blinker = false;
var gliderGun = false;
var pentadecathlon = false;

//chances for fire
var grow = 0.01;
var fire = 0.0001;
var fireFighterResponse = 0.5;
var igniteChance = 1-fireFighterResponse;
var adjacentHit;


function setup(){
    var canvas = createCanvas(680, 460);
    canvas.parent('sketch-holder');
    start();
}

function start(){
    frames();
    if(example==0)startGameOfLife();
    if(example==1)startFire();
}

function frames(){
    frameRate(fRate);
}

function startGameOfLife(){
    for(var i=0; i<680; i+=scl){
        generation[i] = [];
        nextGeneration[i] = [];
        for(var j=0; j<460; j+=scl){
            generation[i][j] = new cells(i, j);
            nextGeneration[i][j] = new cells(i, j);
            if(randomStart){
                if(Math.random()>0.7) generation[i][j].color = 1;
            }
        }
    }
    // blinker
    if(blinker){
        generation[340][230].color=1;
        generation[340][230+scl].color=1;
        generation[340][230-scl].color=1;
    }

    // pulsar
    if(pulsar){
        generation[340-2*scl][230-1*scl].color = 1;
        generation[340-3*scl][230-1*scl].color = 1;
        generation[340-4*scl][230-1*scl].color = 1;
        generation[340-1*scl][230-2*scl].color = 1;
        generation[340-1*scl][230-3*scl].color = 1;
        generation[340-1*scl][230-4*scl].color = 1;

        generation[340+2*scl][230-1*scl].color = 1;
        generation[340+3*scl][230-1*scl].color = 1;
        generation[340+4*scl][230-1*scl].color = 1;
        generation[340+1*scl][230-2*scl].color = 1;
        generation[340+1*scl][230-3*scl].color = 1;
        generation[340+1*scl][230-4*scl].color = 1;

        generation[340-2*scl][230+1*scl].color = 1;
        generation[340-3*scl][230+1*scl].color = 1;
        generation[340-4*scl][230+1*scl].color = 1;
        generation[340-1*scl][230+2*scl].color = 1;
        generation[340-1*scl][230+3*scl].color = 1;
        generation[340-1*scl][230+4*scl].color = 1;

        generation[340+2*scl][230+1*scl].color = 1;
        generation[340+3*scl][230+1*scl].color = 1;
        generation[340+4*scl][230+1*scl].color = 1;
        generation[340+1*scl][230+2*scl].color = 1;
        generation[340+1*scl][230+3*scl].color = 1;
        generation[340+1*scl][230+4*scl].color = 1;


        generation[340-6*scl][230-2*scl].color = 1;
        generation[340-6*scl][230-3*scl].color = 1;
        generation[340-6*scl][230-4*scl].color = 1;
        generation[340-2*scl][230-6*scl].color = 1;
        generation[340-3*scl][230-6*scl].color = 1;
        generation[340-4*scl][230-6*scl].color = 1;

        generation[340+6*scl][230-2*scl].color = 1;
        generation[340+6*scl][230-3*scl].color = 1;
        generation[340+6*scl][230-4*scl].color = 1;
        generation[340+2*scl][230-6*scl].color = 1;
        generation[340+3*scl][230-6*scl].color = 1;
        generation[340+4*scl][230-6*scl].color = 1;

        generation[340+6*scl][230+2*scl].color = 1;
        generation[340+6*scl][230+3*scl].color = 1;
        generation[340+6*scl][230+4*scl].color = 1;
        generation[340+2*scl][230+6*scl].color = 1;
        generation[340+3*scl][230+6*scl].color = 1;
        generation[340+4*scl][230+6*scl].color = 1;

        generation[340-6*scl][230+2*scl].color = 1;
        generation[340-6*scl][230+3*scl].color = 1;
        generation[340-6*scl][230+4*scl].color = 1;
        generation[340-2*scl][230+6*scl].color = 1;
        generation[340-3*scl][230+6*scl].color = 1;
        generation[340-4*scl][230+6*scl].color = 1;
    }

    // gosper glider gun
    if(gliderGun){
        //big circle
        generation[340-1*scl][230+1*scl].color = 1;
        generation[340-2*scl][230+1*scl].color = 1;
        generation[340-2*scl][230+0*scl].color = 1;
        generation[340-2*scl][230+2*scl].color = 1;

        generation[340-3*scl][230-1*scl].color = 1;
        generation[340-3*scl][230+3*scl].color = 1;

        generation[340-4*scl][230+1*scl].color = 1;

        generation[340-5*scl][230-2*scl].color = 1;
        generation[340-5*scl][230+4*scl].color = 1;
        generation[340-6*scl][230-2*scl].color = 1;
        generation[340-6*scl][230+4*scl].color = 1;

        generation[340-7*scl][230-1*scl].color = 1;
        generation[340-7*scl][230+3*scl].color = 1;

        generation[340-8*scl][230+1*scl].color = 1;
        generation[340-8*scl][230+0*scl].color = 1;
        generation[340-8*scl][230+2*scl].color = 1;


        //cresent
        generation[340+2*scl][230+0*scl].color = 1;
        generation[340+3*scl][230+0*scl].color = 1;
        generation[340+2*scl][230-1*scl].color = 1;
        generation[340+3*scl][230-1*scl].color = 1;
        generation[340+2*scl][230-2*scl].color = 1;
        generation[340+3*scl][230-2*scl].color = 1;

        generation[340+4*scl][230+1*scl].color = 1;
        generation[340+4*scl][230-3*scl].color = 1;

        generation[340+6*scl][230+1*scl].color = 1;
        generation[340+6*scl][230-3*scl].color = 1;
        generation[340+6*scl][230+2*scl].color = 1;
        generation[340+6*scl][230-4*scl].color = 1;

        //left square
        generation[340-17*scl][230+0*scl].color = 1;
        generation[340-18*scl][230+0*scl].color = 1;
        generation[340-17*scl][230+1*scl].color = 1;
        generation[340-18*scl][230+1*scl].color = 1;

        //right square
        generation[340+16*scl][230-2*scl].color = 1;
        generation[340+16*scl][230-1*scl].color = 1;
        generation[340+17*scl][230-2*scl].color = 1;
        generation[340+17*scl][230-1*scl].color = 1;

    }

    // pentadecathlon
    if(pentadecathlon){
        generation[340][230].color = 1;
        generation[340][230-1*scl].color = 1;
        generation[340][230+1*scl].color = 1;
        generation[340][230-2*scl].color = 1;

        generation[340-scl][230-3*scl].color = 1;
        generation[340+scl][230-3*scl].color = 1;

        generation[340-scl][230+2*scl].color = 1;
        generation[340+scl][230+2*scl].color = 1;

        generation[340][230-4*scl].color = 1;
        generation[340][230-5*scl].color = 1;
        generation[340][230+3*scl].color = 1;
        generation[340][230+4*scl].color = 1;

    }
}

function startFire(){
    for(var i=0; i<680; i+=scl){
        generation[i] = [];
        nextGeneration[i] = [];
        for(var j=0; j<460; j+=scl){
            generation[i][j] = new cells(i, j);
            nextGeneration[i][j] = new cells(i, j);
        }
    }
}

function updateCellsFire(i, j){

    neigbors = neighborsCount(i, j);

    if(generation[i][j].color==2){
        if(neigbors>0 && Math.random()<fireFighterResponse)
            nextGeneration[i][j].color = 1;
        else if(Math.random()<fire)
            nextGeneration[i][j].color = 1;
        else
            nextGeneration[i][j].color = 2;

    }else if(generation[i][j].color==1){
        generation[i][j].strength--;
        if(generation[i][j].strength==2){
            nextGeneration[i][j].color = 3;
        }else{
            nextGeneration[i][j].color = 1;
        }

    }else if(generation[i][j].color==3){
        generation[i][j].strength--;
        nextGeneration[i][j].color = 3;

    }else if(generation[i][j].color==-1){

        generation[i][j].strength++;
        nextGeneration[i][j].color = -1;
        if(generation[i][j].strength==4) nextGeneration[i][j].color = 0;

    }else if(generation[i][j].color==0){
        //console.log("check");
        nextGeneration[i][j].color = 0;
        if(Math.random()<grow) nextGeneration[i][j].color = 2;
    }

    if(generation[i][j].strength==0){
        nextGeneration[i][j].color = -1;
    }

}
function updateCellsGameOfLife(i, j){
    neighbors = neighborsCount(i, j);
    if(generation[i][j].color==1){

        if(neighbors<2 || neighbors>3){
            //console.log(i+" "+j+" "+neighbors+" dies");
            // generation[i][j].color = 0;
            nextGeneration[i][j].color = 0;
        }else{
            //console.log(i+" "+j+" "+neighbors+" lives");
            //generation[i][j].color = generation[i][j].color;
            nextGeneration[i][j].color = 1;
        }

    }else if (neighbors==3){
        //console.log(i+" "+j+" "+neighbors+" new life");
        //generation[i][j].color = 1;
        nextGeneration[i][j].color = 1;
    }else{
        //generation[i][j].color = generation[i][j].color;
        nextGeneration[i][j].color = 0;
    }
}

function neighborsCount(i, j){
    count = 0;

    /*
        123
        xxx
        xxx
    */
    if(j>0){
        if(i>0 && generation[i-scl][j-scl].color==1){
            count += 1;
            //console.log(i+" "+j+" Check1 "+count);
        }
        if(generation[i][j-scl].color==1) {
            count += 1;
            //console.log(i+" "+j+" Check2 "+count);
        }
        if(i<680-scl && generation[i+scl][j-scl].color==1){
            count += 1;
            //console.log(i+" "+j+" Check3 "+count);
        }
    }

    /*
        xxx
        4x6
        xxx
    */
    if(i>0 && generation[i-scl][j].color==1) {
        count += 1;
        //console.log(i+" "+j+" Check4 "+count);
    }
    if(i<680-scl && generation[i+scl][j].color==1) {
        count += 1;
        //console.log(i+" "+j+" Check4 "+count);
    }

    /*
        xxx
        xxx
        789
    */
    if(j<460-scl){
        if(i>0 && generation[i-scl][j+scl].color==1) {
            count += 1;
            //console.log(i+" "+j+" Check7 "+count);
        }
        if(generation[i][j+scl].color==1) {
            count += 1;
            //console.log(i+" "+j+" Check8 "+count);
        }
        if(i<680-scl && generation[i+scl][j+scl].color==1) {
            count += 1;
            //console.log(i+" "+j+" Check680 "+count);
        }
    }



    return count;
}


function draw(){
    if(stop){
        background(100);
        if(example!=0) noStroke();
        for(var i=0; i<680; i+=scl){
            for(var j=0; j<460; j+=scl){
                if(example == 0)updateCellsGameOfLife(i, j);
                if(example == 1)updateCellsFire(i, j);
                generation[i][j].show();
            }
        }
        // stop = !stop;
        for(var k=0; k<680; k+=scl){
            for(var l=0; l<460; l+=scl){
                var newColor = nextGeneration[k][l].color;
                generation[k][l].color = newColor;
                nextGeneration[k][l].color = 0;
            }
        }
    }
}
