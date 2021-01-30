class ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    show(){
        var yay = this.body.position
        rectMode(CENTER)
        fill("purple")
        rect(yay.x, yay.y, this.width, this.height)
    }
}
