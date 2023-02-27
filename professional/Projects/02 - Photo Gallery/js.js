const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const galeriaCompleta = document.querySelectorAll(".foto");
let mostrando = 0;

prevButton.addEventListener("click", function(){
    galeriaCompleta[mostrando].classList.remove("active");
    mostrando--;
    galeriaCompleta[mostrando].classList.add("active");
    nextButton.disabled = false;
    if(mostrando === 0){
        prevButton.disabled = true;
    }
});

nextButton.addEventListener("click", function(){
    galeriaCompleta[mostrando].classList.remove("active");
    mostrando++;
    galeriaCompleta[mostrando].classList.add("active");
    prevButton.disabled = false;
    if(galeriaCompleta.length === mostrando+1){
        nextButton.disabled = true;
    }
});