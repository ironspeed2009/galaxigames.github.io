// Solo agregamos JS si quieres hacer el efecto más interactivo o controlado manualmente
const card = document.querySelector('.card');

card.addEventListener('click', function() {
    card.classList.toggle('flipped');
});

window.onload=function(){alert('Bienvenido a esta pagina');}
window.onunload=function(){alert('Vuelva en otro momento');}

let slideIndex = 0; // Índice de la tarjeta visible

// Función para mover las tarjetas
function moveSlides() {
    let cards = document.getElementsByClassName("card");
    
    // Si estamos en la última tarjeta, ir a la primera
    if (slideIndex >= cards.length) {
        slideIndex = 0;
    }
    
    // Desplazamos el slider a la tarjeta correspondiente
    document.querySelector(".slider").style.transform = "translateX(" + (-slideIndex * 50) + "%)";
    
    // Incrementar el índice de la tarjeta para la siguiente
    slideIndex++;
}

// Función para mover a la tarjeta anterior
function prevSlide() {
    if (slideIndex <= 0) {
        slideIndex = document.getElementsByClassName("card").length;
    }
    slideIndex--;
    document.querySelector(".slider").style.transform = "translateX(" + (-slideIndex * 50) + "%)";
}

// Función para mover a la siguiente tarjeta
function nextSlide() {
    moveSlides();
}

// Llamar la función cada 3 segundos
setInterval(moveSlides, 3000); // Cambiar a la siguiente tarjeta cada 3 segundos