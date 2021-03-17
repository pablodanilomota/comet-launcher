/**
 * Setup.
 */
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

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
  const size = random(10,50)

  const ball = Ball(
     random(0 + size,width - size),
     random(0 + size,height - size),
     random(-8,8),
     random(-8,8),
     'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) +')',
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
      elements.balls[index].draw()
      elements.balls[index].refreshPosition()
   })

   requestAnimationFrame(refresh);
}

refresh();