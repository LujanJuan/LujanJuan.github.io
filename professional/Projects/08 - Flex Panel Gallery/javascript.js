const paneles = document.querySelectorAll(".panel");
function activarOpen(){
    this.classList.toggle("open")
}
function activarActive(event){
    if(event.propertyName.includes("flex")){
    this.classList.toggle("open-active")
}}
paneles.forEach(panel => panel.addEventListener("click", activarOpen))
paneles.forEach(panel => panel.addEventListener("transitionend", activarActive))