class Pipe{
    constructor(x, y, height, color){
        this.x = x
        this.y = y
        this.height = height
        this.width = 70
        this.color = color
    }

    draw(){
        this.drawRect(this.x, this.y, this.width, this.height)
        this.drawRect(this.x - (90 - this.width)/2, this.y + this.height, 90, 45)
        this.drawRect(this.x, canvas.height - this.height, this.width, this.height)
        this.drawRect(this.x - (90 - this.width)/2, canvas.height - this.y - this.height, 90, 45)
    }

    drawRect(x, y, w, h){
        c.beginPath()
        c.rect(x, y, w, h)
        c.fillStyle = this.color
        c.fill()
    }

    update(){
        this.draw()
        this.x -= 0.5
    }

}