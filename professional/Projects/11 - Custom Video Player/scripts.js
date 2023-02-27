const reproductor = document.querySelector(".player");
const video = reproductor.querySelector(".viewer");
const progress = reproductor.querySelector(".progress");
const progressBar = reproductor.querySelector(".progress__filled");
const toggle = reproductor.querySelector(".toggle");
const skipButtons = reproductor.querySelectorAll("[data-skip]")
const ranges = reproductor.querySelectorAll(".player__slider")



function togglePlay(){
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}
function updateButton(){
    const icono = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icono;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis =`${percent}%`;
}

function scrub(event){
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

let mouseDown = false;

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate))
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate))
progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", (event) => mouseDown && scrub(event))
progress.addEventListener("mousedown", () => mouseDown = true)
progress.addEventListener("mouseup", () => mouseDown = false)