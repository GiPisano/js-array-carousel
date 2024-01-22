// funzione scorrimento automatico
function startCarousel(){
    intervalNext = setInterval(function(){
        goToSlide(currentSlide >= allSlides.length - 1 ? 0 : currentSlide + 1)
    }, 3000);
};

function goToSlide(index){

    // elimino la classe active attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');
   
    const oldThumbnails = document.querySelector('.container-thumb-img.active');
    oldThumbnails.classList.remove('active');

    // imposto la nuova slide
    currentSlide = index;

    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active');

    // mostro la nuova thumbnails img
    const newThumbnails = allThumbnails[currentSlide];
    newThumbnails.classList.add('active');
}