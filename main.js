/* Hero Carrusel */
const slider = document.querySelector("#slider");
let sliderBlock = document.querySelectorAll(".slider_i")
let sliderLast = sliderBlock[sliderBlock.length - 1];

const btnLeft = document.querySelector("#btn_l");
const btnRight = document.querySelector("#btn_r");

slider.insertAdjacentElement('afterbegin', sliderLast);

function next() {
    let sliderFirst = document.querySelectorAll(".slider_i")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderFirst);
        slider.style.marginLeft = "-100%";
    }, 500);


}

function previus() {
    let sliderBlock = document.querySelectorAll(".slider_i")
    let sliderLast = sliderBlock[sliderBlock.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderLast);
        slider.style.marginLeft = "-100%";
    }, 500);


}

btnRight.addEventListener('click', function() {
    next();
});
btnLeft.addEventListener('click', function() {
    previus();
});
setInterval(function() {
    next();
}, 10000)


/* Contact */
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (nombre.value.length > 0 && correo.value.length > 0 && mensaje.value.length > 0) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var valido = regex.test(correo.value) ? true : false;
        if (valido == true) {
            alert('Su solicitud ha sido enviada');
            console.log('Nombre: ' + nombre.value);
            console.log('Correo: ' + correo.value);
            console.log('Mensaje: ' + mensaje.value);
            e.preventDefault();
        } else {
            alert('Debes ingresar un correo válido.');
            e.preventDefault();
        }

    } else {
        alert('Debes llenar todos los campos');
        e.preventDefault();
    }
})