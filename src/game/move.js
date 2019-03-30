var myObject;
var food1;

function startGame() {
    myObject = new Object(35, 35, 500, 300);
    food1 = new food(39,39,550,350);

    playZone.start();
}

var playZone = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.height = 600;
        this.canvas.width = 1000;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateplayZone, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function Object(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.Xspeed = 0;
    this.Yspeed = 0;
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = playZone.context;
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
        this.x += this.Xspeed;
        this.y += this.Yspeed;
    };

}

function food(width, height,x,y){
    this.width = width;
    this.height = height;
    this.Xspeed = 0;
    this.Yspeed = 0;
    this.x = x;
    this.y = y;

    this.update1 = function() {
        ctx = playZone.context;
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos1 = function() {
        this.x = this.Xspeed;
        this.y = this.Yspeed;
    };



}

function updateplayZone() {
    playZone.clear();
    myObject.newPos();
    // checks for collision
    myObject.update();


    food1.newPos1();
    food1.update1();




}

// Movement Direction
function keymove(press){
    var key=press.which||press.keyCode;
    switch(key){
        case 37: //left arrow
            moveLeft();
            break;
        case 38: //Up arrow
            moveUp();
            break;
        case 39: //right arrow
            moveRight();
            break;
        case 40: //down arrow
            moveDown();
            break;
        case 32: //space bar
            Stop();
            break;
    }
}
// Movement speed for block
function moveUp() {
    myObject.Yspeed = -5;
}

function moveDown() {
    myObject.Yspeed = 5;
}

function moveLeft() {
    myObject.Xspeed = -5;
}

function moveRight() {
    myObject.Xspeed = 5;
}
function Stop() {
    myObject.Xspeed = 0;
    myObject.Yspeed = 0;
}

