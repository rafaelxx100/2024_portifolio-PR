// Função para o menu hamburguer
document.addEventListener('DOMContentLoaded', function(){
   var menuHamburguer = document.getElementById('menu-hamburguer');
   if (menuHamburguer){
      menuHamburguer.addEventListener('click', function(){
         var menu = document.getElementById('menu');
         if(menu){
            menu.classList.toggle('ativa-menu');
            menuHamburguer.classList.toggle('ativo');
         }
      });
   }
});

// Função para abrir link em uma nova guia
function openLinks(url) {
   window.open(url, '_blank');
}


//carrosel
let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(track).gap) || 0;
    
    currentIndex += direction;

    // Garantir que o índice esteja dentro dos limites
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= cards.length) {
        currentIndex = cards.length - 1;
    }

    const translateX = -(cardWidth + gap) * currentIndex;
    track.style.transform = `translateX(${translateX}px)`;

    //efeito de profundidade
    cards.forEach((card, index) => {
      if (index === currentIndex){
         card.classList.add('active');
      } else {
         card.classList.remove('active');
      }
    });
}

document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll('.card');
   if(cards.length > 0){
      cards[0].classList.add('active');
   }
});


//efeitos de click
function JumpEffect(element) {
   element.classList.add('jump');
   element.addEventListener('animationend', () => {
       element.classList.remove('jump');
   }, { once: true });
}
function JumpFront(element){
   element.classList.add('scale');
   element.addEventListener('animationend', () => {
       element.classList.remove('scale');
   }, { once: true });
}

//Efeito hover nas setas
document.addEventListener('DOMContentLoaded', () =>{
   const hexagonImage = document.querySelector('.hexagon-image');
   const hexagonIn = document.querySelector('.hexagon-in');
   const left = document.querySelector('#left');
   const right = document.getElementById('right');

   hexagonImage.addEventListener('click', () =>{JumpFront(hexagonImage)});

   left.addEventListener('mouseenter', () => {
      left.classList.remove("fa-angle-left");
      left.classList.add('fa-angles-left');
  });
  left.addEventListener('mouseleave', () => {
      left.classList.remove("fa-angles-left");
      left.classList.add('fa-angle-left');
});
left.addEventListener('click', () => {JumpEffect(left)});


right.addEventListener('mouseenter', () => {
   right.classList.remove("fa-angle-right");
   right.classList.add('fa-angles-right');
});
right.addEventListener('mouseleave', () => {
right.classList.remove("fa-angles-right");
   right.classList.add('fa-angle-right');
});
right.addEventListener('click', () => {JumpEffect(right)});
})


