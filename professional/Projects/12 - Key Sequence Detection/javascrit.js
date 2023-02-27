const pressedArray = []
const secretCode = "juanca"
window.addEventListener("keyup", (event) =>{
    pressedArray.push(event.key);
    pressedArray.splice(-secretCode.length -1, pressedArray.length - secretCode.length)
    let joined = pressedArray.join("")
    console.log(joined)
    if(joined.includes(secretCode)){
        cornify_add()
    }
})