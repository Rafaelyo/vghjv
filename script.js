const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1824
const canvasHeight = 576

canvas.widght = canvasWidth
canvas.Height = canvasHeight

let prevTime = 0

animate()

function animate() {
    window.requestAnimationFrame(animate)

    ctx.fillRect(0,0,canvasWidth,canvasHeight)

    let delta = (performance.now) - prevTime / 1000
    let fps = 1 / delta

    prevTime = performance.now()
    //console.log('FPS: ${fps}') 
}




