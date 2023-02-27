const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADASS";
context.lineJoin = "round";
context.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event){
    if(!isDrawing){
        return
    }
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
}
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", (event) =>{
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)