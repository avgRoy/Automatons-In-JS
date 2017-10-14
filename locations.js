function locations(x, y){
    this.x = x;
    this.y = y;
    this.location = [x, y];

    this.setX = function(x){
        this.x = x;
        this.update();
    };

    this.setY = function(y){
        this.y = y;
        this.update();
    };

    this.update = function(){
        location = [x,y];
    };

}
