function automatons(i, j){
  this.x = i;
  this.y = j;
  this.color = 0;
  this.strength = 5;
  this.grow = 0.01;
  this.fire = 0.0001;
  var eventHappens;

  this.update = function(){
      this.eventHappens = Math.random();
      if(this.eventHappens<=this.fire && this.color==1){
          this.color = 2;
      }else if(this.eventHappens<=this.grow && this.color==0 && this.strength>0){
          this.color = 1;
      }
      if(this.color == 2){
          this.strength--;
      }else if(this.color==-1){
          if(this.strength==5) this.color = 0;
          else this.strength++;
      }
      if(this.strength == 0){
          this.color = -1;
          this.strength = 0;
      }
  };

  this.show = function(){
    if(this.color==1)
        fill(34,139,34);
        //fill(255,255,255);
    else if(this.color==2)
        fill(178,34,34);
        //fill(230,230,236);
    else
        fill(256,256,256);
        //fill(0,0,256);
    rect(this.x, this.y, scl, scl);
  };
}
