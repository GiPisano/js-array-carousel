// funzione click Next
function clickNext(){
    // elimino la classe active attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');
   
    const oldThumbnails = document.querySelector('.container-thumb-img.active');
    oldThumbnails.classList.remove('active');
   
    // incremento la slide che verrà mostrata 
    if(currentSlide >= allSlides.length - 1){
        currentSlide = 0;
    } else{
        currentSlide++;
    };
   
    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active');
   
    // mostro la nuova thumbnails img
    const newThumbnails = allThumbnails[currentSlide];
    newThumbnails.classList.add('active');
}
   
// funzione click prev
function clickPrev(){
    // elimino la classe active attuale 
    const oldImg = document.querySelector('.slide.active');
    oldImg.classList.remove('active');

    const oldThumbnails = document.querySelector('.container-thumb-img.active');
    oldThumbnails.classList.remove('active');

    // decremento la slide che verrà mostrata 
    if(currentSlide <= 0){
        currentSlide = allSlides.length - 1;
    } else{
        currentSlide--;
    };

    // mostro la nuova slide
    const newImg = allSlides[currentSlide];
    newImg.classList.add('active');

    // mostro la nuova thumbnails img
    const newThumbnails = allThumbnails[currentSlide];
    newThumbnails.classList.add('active');
}