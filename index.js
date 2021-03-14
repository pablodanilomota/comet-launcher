/**
 * Setup
 */
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

/**
 * Generate function.
 */
const random = (minimum, maximum) =>  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

class Ball {
   constructor(x, y, speedX, speedY, color, size) {
      this.positionX = x
      this.positionY = y
      this.speedX = speedX
      this.speedY = speedY
      this.color = color
      this.size = size
   }

   draw() {
      context.beginPath()
      context.fillStyle = this.color
      context.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI)
      context.fill()
   }

   update() {
      if ((this.positionX + this.size) >= width) {
         this.speedX = -(this.speedX)
      }

      if ((this.positionX - this.size) <= 0) {
         this.speedX = -(this.speedX)
      }

      if ((this.positionY + this.size) >= height) {
         this.speedY = -(this.speedY)
      }

      if ((this.positionY - this.size) <= 0) {
         this.speedY = -(this.speedY)
      }

      this.positionX += this.speedX
      this.positionY += this.speedY
   }
}

var balls = []

const createBall = () => {
  const size = random(10,50)
  let ball = new Ball(
     // ball position always drawn at least one ball width
     // away from the edge of the canvas, to avoid drawing errors
     random(0 + size,width - size),
     random(0 + size,height - size),
     random(-7,7),
     random(-7,7),
     'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
     size
  );

 balls.push(ball)
}

const clear = () => {
 balls.splice(0, balls.length)
}

function loop() {
   context.fillStyle = 'rgba(31, 31, 31, 1)'
   context.fillRect(0, 0, width, height)

   balls.forEach((_, index) => {
    balls[index].draw()
    balls[index].update()
   })

   requestAnimationFrame(loop);
}

loop();