class Player{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.gravity = 0
        this.jumpHeight = 3
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update(){
        this.draw()
        //this.gravity += 0.03
        this.y += this.gravity
    }

    jump(){
        this.gravity = 0
        this.gravity = -this.jumpHeight
    }
}