/**
 * Setup.
 */
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const width = canvas.width
const height = canvas.height

/**
 * Generate function.
 */
const random = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

/**
 * Screen elements.
 */
const elements = {
   balls: []
}

/**
 * Create balls.
 */
const createBall = () => {
  const size = random(35,75)

  const ball = Ball(
     random(0 + size,width - size),
     random(0 + size,height - size),
     random(-8,8),
     random(-8,8),
     'rgb(' + random(150,255) + ',' + random(150,190) + ',' + random(150,255) +')',
     size
  )

 elements.balls.push(ball)
}

for(i = 0; i<50; i++) {
   const size = random(2, 8)

   const ball = Ball(
      random(1, 1900),
      random(1, 1200),
      random(0, 0),
      random(0, 0),
      'rgb(150,150,150)',
      size
   )

   elements.balls.push(ball)
}

/**
 * Refresh in loop.
 */
function refresh() {
   context.fillStyle = 'rgba(31, 31, 31, 1)'
   context.fillRect(0, 0, width, height)

   elements.balls.forEach((_, index) => {
      elements.balls[index].create()
      elements.balls[index].refreshPosition()
   })

   requestAnimationFrame(refresh);
}

refresh();