const blackHole = $("img")
const rabbit = $("div")


rabbit.one('mousedown',function() {
    rabbit.effect("shake", 200)
    
})

rabbit.draggable()

blackHole.droppable({
    drop: function(){
        rabbit.fadeOut(1000)
    }
})