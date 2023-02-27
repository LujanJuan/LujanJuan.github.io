let keys = document.querySelectorAll(".key");
let sounds = document.getElementsByClassName("sound");

window.addEventListener("keydown", function(event){
    const audio = document.querySelector( `audio[data-key="${event.keyCode}"`)
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    const keyDiv = document.querySelector(`div[data-key="${event.keyCode}"]`)
    keyDiv.classList.add("playing")
})
keys.forEach(key => {key.addEventListener("transitionend", removeTransition)});

function removeTransition(event){
    if(event.propertyName != "transform"){
        return
    } else{
        this.classList.remove("playing")
    }
}