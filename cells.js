function cells(i, j){
  this.x = i;
  this.y = j;
  this.color = 0;
  this.strength = 4;

  this.show = function(){

    //game of life
    if(example==0){
        if(this.color == 1)
            fill(246,246,246);
        else if(this.color==2)
            fill(255, 0, 0);
        else
            fill(0,0,0);

    //Fire sim
    }else if(example==1){
        if(this.color == 2)
            fill(34,139,34);
        else if(this.color == 1)
            fill(178,34,34);
        else if(this.color == 3)
            fill(223,90,90);
            //fill(255, 255, 255);
        else
            fill(246,246,246);
    }

    //all drawn same
    rect(this.x, this.y, scl, scl);
  };
}
