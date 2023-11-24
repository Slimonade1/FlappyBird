class Pipe{
    constructor(x, y, height, color){
        this.x = x
        this.y = y
        this.height = height
        this.width = 70
        this.color = color

        this.rectWidth = 90
        this.rectHeight = 45
        this.distance = 250
    }

    draw(){
        this.drawRect(this.x, this.y, this.width, this.height)
        this.drawRect(this.x - (this.rectWidth - this.width)/2, this.y + this.height, this.rectWidth, this.rectHeight)

        this.drawRect(this.x, this.y + this.height + this.distance, this.width, canvas.height)
        this.drawRect(this.x - (this.rectWidth - this.width)/2, this.y + this.height + this.distance - this.rectHeight, this.rectWidth, this.rectHeight)
    }

    drawRect(x, y, w, h){
        c.beginPath()
        c.rect(x, y, w, h)
        c.fillStyle = this.color
        c.fill()
    }

    collision(){
        if(player.y - player.radius < this.height + this.rectHeight || player.y + player.radius> this.height - this.rectHeight + this.distance){
            if(player.x + player.radius >= this.x && player.x - player.radius <= this.x + this.width){
                endGame()
            }
        }
        
    }

    update(){
        this.collision()
        this.draw()
        this.x -= 2
    }
}