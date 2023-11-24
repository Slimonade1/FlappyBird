class Player{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.gravity = 0
        this.jumpHeight = 5.5
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        c.fillStyle = this.color
        c.fill()
    }

    floorCollision(){
        if(this.y + this.radius >= canvas.height){
            endGame()
        }
    }

    update(){
        this.draw()
        this.floorCollision()
        this.gravity += 0.20
        this.y += this.gravity
    }

    jump(){
        if(this.y - this.radius >= 0){
            this.gravity = 0
            this.gravity = -this.jumpHeight
        } else{
            this.y = 0 + this.radius
        }
        
    }
}