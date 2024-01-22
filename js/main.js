const containerSlide = document.querySelector('.container-slide');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');
const thumbnailsList = document.querySelector('.thumbnails-list');
const containerCarousel = document.querySelector('.carousel-container')

// definisco l'array delle slides
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

// definisco la slide che verrà mostrata 
let currentSlide = 0;
let intervalNext;

// genero le slides
let slidesHtml = "";
let thumbnailsListHtml = "";
for(let i = 0; i < slides.length; i++){
    const slide = slides[i];
    let activeClass = i == currentSlide ? 'active' : '';

    slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}">`;

    thumbnailsListHtml += 
    `<div class="container-thumb-img ${activeClass}">
        <img src="./img/${slide}" class="thumb-slide" alt="slide ${i}">
    </div>`;
}

containerSlide.innerHTML = slidesHtml;
thumbnailsList.innerHTML = thumbnailsListHtml;

const allSlides = document.querySelectorAll('.slide');
const allThumbnails = document.querySelectorAll('.container-thumb-img');

// creo un evento per il click della freccia che scorre le slides
arrowNext.addEventListener('click', function(){
    clickNext()
})

// creo un evento per il click della freccia che torna indietro
arrowPrev.addEventListener('click', function(){
    clickPrev()
})

// creo un evento per il click della Thumbnails
for(let i = 0; i < allThumbnails.length; i++){
    const thumbImg = allThumbnails[i];

    thumbImg.addEventListener('click', function(){
        // elimino la classe active attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');

    const oldThumbnails = document.querySelector('.container-thumb-img.active');
    oldThumbnails.classList.remove('active');
    
    // imposto la nuova slide
    currentSlide = i;
    
    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active');

    // mostro la nuova thumbnails img
    const newThumbnails = allThumbnails[currentSlide];
    newThumbnails.classList.add('active');
    })
}



containerCarousel.addEventListener('mouseout', function(){
    intervalNext = setInterval(function(){
        clickNext()
    }, 3000);
});

containerCarousel.addEventListener('mouseover', function(){
    clearInterval(intervalNext)
});



