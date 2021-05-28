const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");


const ball = function (x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color ="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +
    "," + Math.floor(Math.random() * 256) + ")";
  this.speed = Math.random() * 2 + 1;
  this.direction = Math.random() * Math.PI * 2;

  this.updatePosition = function (height, width) {
    
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;

    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.direction = Math.atan2(
        Math.sin(this.direction),
        Math.cos(this.direction) * -1
      );
    } else if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.direction = Math.atan2(
        Math.sin(this.direction),
        Math.cos(this.direction) * -1
      );
    } else if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.direction = Math.atan2(
        Math.sin(this.direction) * -1,
        Math.cos(this.direction)
      );
    } else if (this.y + this.radius > height) {
      this.y = height - this.radius;
      this.direction = Math.atan2(
        Math.sin(this.direction) * -1,
        Math.cos(this.direction)
      );
    }
  };

  this.Collision = function (nextBall) {
    var dx = this.x - nextBall.x;
    var dy = this.y - nextBall.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.radius + nextBall.radius) {
      this.direction = Math.atan2(
        Math.sin(this.direction) * -1,
        Math.cos(this.direction) * -1
      );
    }
  };
};

var balls = new Array();

var height = window.innerHeight;
var width = window.innerWidth;

var random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (var i = 0; i < 100; i++) {
  var radius = random(20, 5);

  var x = random(radius, width - radius);
  var y = random(radius, height - radius);

  if (balls.length > 0) {
    for (var j = 0; j < balls.length; j++) {
      var dx = x - balls[j].x;
      var dy = y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      if (distance - (radius + balls[j].radius) < 0) {
        x = random(radius, width - radius);
        y = random(radius, height - radius);
        j = -1;
      }
    }
  }

  balls.push(new ball(x, y, radius));
}

function loop() {
  ctx.canvas.height = height;
  ctx.canvas.width = width;

  for (var i = 0; i < balls.length; i++) {
    ctx.fillStyle = balls[i].color;
    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
    ctx.fill();

    for (var j = 0; j < balls.length; j++) {
      if (i != j) {
        balls[i].Collision(balls[j]);
      }
    }

    balls[i].updatePosition(height, width);
  }

  window.requestAnimationFrame(loop);
}

loop();