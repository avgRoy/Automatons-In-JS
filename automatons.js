function automatons(){
  this.x = floor(Math.random()*(580/scl))*scl;
  this.y = floor(Math.random()*(380/scl))*scl;
  this.strength = floor(Math.random()*500);
  this.color = Math.random()*2;



  this.update = function(){
    this.randomMove = Math.random()*4;
    if(this.color<=1){
    if(this.x==0){
      this.x += scl;
    }else if(this.x==600-scl){
      this.x -= scl;
    }else if(this.y==0){
      this.y += scl;
    }else if(this.y==400-scl){
      this.y -= scl;
    }else{
      if(this.randomMove<1) this.x+=scl;
      else if(this.randomMove<2) this.y+=scl;
      else if(this.randomMove<3) this.x-=scl;
      else if(this.randomMove<=4) this.y-=scl;
    }
    }
    this.strength--;
  };

  this.show = function(){
    if(this.strength>0){
    if(this.color<=1)
      fill(0, 128, 128);
    else
      fill(0, 0, 0);
    rect(this.x, this.y, scl, scl);
    }
  };
}
