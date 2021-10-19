 var mouseEvent = "empty"
 var last_position_of_x , last_position_of_y;
canvas = document.getElementById("myCanvas")

 color = "blue"
 ctx = canvas.getContext("2d")
ctx.strokeStyle = color
ctx.lineWidth = 2
canvas.addEventListener("mousedown", my_mouse_down)

function my_mouse_down(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove" , my_mouse_move)
function my_mouse_move(e){
    current_mouse_x = e.clientX - canvas.offsetLeft
    current_mouse_y = e.clientX - canvas.offsetTop
    if(mouseEvent == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle= color
        ctx.lineWidth= 2
        console.log("last_position_of_x and y" )
        console.log( "x = " + last_position_of_x + "y =" + last_position_of_y  )
        ctx.moveTo(last_position_of_x , last_position_of_y)
        console.log("current_position_of_x and y")
        console.log("x = " + current_mouse_x + "y = " + current_mouse_y)
        ctx.lineTo(current_mouse_x , current_mouse_y)
        ctx.stroke
        
        
    }
    last_position_of_x = current_mouse_x;
    last_position_of_y = current_mouse_y;
    
}
