/**
 * Ball service.
 */
const Ball = (x, y, speedX, speedY, color, size) => {
   /**
    * Refresh ball position.
    */
  const refreshPosition = () => {
    if ((x + size) >= width) {
       speedX = -(speedX)
    }

    if ((x - size) <= 0) {
       speedX = -(speedX)
    }

    if ((y + size) >= height) {
       speedY = -(speedY)
    }

    if ((y - size) <= 0) {
       speedY = -(speedY)
    }

    x += speedX
    y += speedY
 }

 /**
  * Draw.
  */
 const create = () => {
  context.beginPath()
  context.fillStyle = color
  context.arc(x, y, size, 0, 2 * Math.PI)
  context.fill()
}

 return {
  refreshPosition,
  create
 }
}