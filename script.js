const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = canvas.width/4
const y = canvas.height/2

const player = new Player(x, y, 30, '#e9c498')

player.update()

let animationId
function animate(){
    animationId = requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    player.update()
    document.getElementById("test").innerHTML = player.y
}

addEventListener('touchstart', (event) => 
    {
        player.jump()
    }
)

addEventListener('click', (event) => 
    {
        player.jump()
    }
)

animate()