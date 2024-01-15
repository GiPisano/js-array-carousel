const containerSlide = document.querySelector('.container-slide');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');

// definisco l'array delle slides
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

// definisco la slide che verrà mostrata 
let currentSlide = 0;

// genero le slides
let slidesHtml = "";
for(let i = 0; i < slides.length; i++){
    const slide = slides[i];
    let activeClass = i == currentSlide ? 'active' : '';

    slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}">`;
}
containerSlide.innerHTML = slidesHtml;


// creo un evento per il click della freccia che scorre le slides
arrowNext.addEventListener('click', function(){
    // recupero tutte le slide
    const allSlides = document.querySelectorAll('.slide');

    // elimino la classe active dall attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');

    // incremento la slide che verrà mostrata 
    if(currentSlide >= allSlides.length - 1){
        currentSlide = 0;
    } else{
        currentSlide++;
    }

    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active')


})

// creo un evento per il click della freccia che torna indietro
arrowPrev.addEventListener('click', function(){
    // recupero tutte le slide
    const allSlides = document.querySelectorAll('.slide');

    // elimino la classe active dall attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');

    // decremento la slide che verrà mostrata 
    if(currentSlide <= 0){
        currentSlide = allSlides.length - 1;
    } else{
        currentSlide--;
    }

    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active')

})