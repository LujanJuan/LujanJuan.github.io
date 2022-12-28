const botonPrev = document.querySelector('.prev');
const botonNext = document.querySelector('.next');
const imagenes = document.querySelectorAll('.foto');
let imagenSeleccionada = 0;

botonPrev.addEventListener('click', function(){
    imagenes[imagenSeleccionada].classList.remove("activa");
    imagenSeleccionada--;
    imagenes[imagenSeleccionada].classList.add("activa");
    botonNext.disabled = false;
    if(imagenSeleccionada === 0){
        botonPrev.disabled = true;
    }
});

botonNext.addEventListener('click', function() {
    imagenes[imagenSeleccionada].classList.remove("activa");
    imagenSeleccionada++;
    imagenes[imagenSeleccionada].classList.add("activa")
    botonPrev.disabled = false;
    if(imagenSeleccionada === imagenes.length -1){
        botonNext.disabled = true;
    }
});