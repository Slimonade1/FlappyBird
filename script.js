const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const scoreEl = document.getElementById("scoreEl")
const startGameBtn = document.getElementById("startGameBtn")
const modalEl = document.getElementById("modalEl")
const bigScoreEl = document.getElementById("bigScore")

const x = canvas.width/4
const y = canvas.height/2

const player = new Player(x, y, 30, '#e9c498')

let pipes = []

function init(){
    pipes = []
    scoreEl.innerHTML = score
    bigScoreEl.innerHTML = score
}

let animationId
let score = 0
function animate(){
    animationId = requestAnimationFrame(animate)
    c.fillStyle = '#b0c1ed'
    c.fillRect(0, 0, canvas.width, canvas.height)

    pipes.forEach((pipe, index)=>{
        pipe.update()
        if(pipe.x <= -150){
            setTimeout(() => {
                pipes.splice(index, 1)
            }, 0)
        }
    })

    player.update()
}

function endGame(){
    cancelAnimationFrame(animationId)
    modalEl.style.display = 'flex'
    bigScoreEl.innerHTML = score
}

pipes.push(new Pipe(x+300, 0, Math.random() * (canvas.height/2 - 70) + 70, '#bce3aa'))
function spawnPipes(){ 
    setInterval(() => {
        pipes.push(new Pipe(x+300, 0, Math.random() * ((canvas.height - 220) - 30) + 30, '#bce3aa'))
        score++;
    }, 2300)
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

startGameBtn.addEventListener('click', () => {
    init()
    animate()
    spawnPipes()
    modalEl.style.display = 'none'
})