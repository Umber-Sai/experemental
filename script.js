let posInit = 0;
let pos = 0;
let posOffset = 0;
let currentX = 0;

const slideWidth = $('.slide').eq(0).width()

const frame = $('.frame');
frame.on('touchstart', (event) => {
    posInit = event.changedTouches[0].clientX;
    $('.posInit span').text(event.changedTouches[0].clientX)
})

frame.on('touchmove', (event) => {
    pos = event.changedTouches[0].clientX
    posOffset = pos - posInit;
    $('.pos span').text(event.changedTouches[0].clientX)
    $('.posOffset span').text(posOffset)
    $('.track').css({left : (currentX + posOffset) +'px'})
})

frame.on('touchend', (event) => {
    posInit = 0;
    currentX += posOffset;
    $('.currentX span').text(currentX);
    const remainder = -currentX % (slideWidth + 10);
    const halfSlide = (slideWidth + 10)/2;

    if ( remainder <= halfSlide) {
        currentX += remainder;
        $('.currentX span').text(currentX);
        $('.track').animate({left : currentX +'px'});
    } else {
        currentX += remainder - halfSlide * 2;
        $('.currentX span').text(currentX);
        $('.track').animate({left : currentX +'px'});
    }

    console.log('halfSlide: ' + halfSlide)
    console.log('reminder: ' + remainder)
    // if (currentX % (slideWidth + 10) < (slideWidth + 10)/2){
    //     currentX -= currentX % (slideWidth + 10)
    //     $('.currentX span').text(currentX);
    //     $('.track').animate({left : currentX +'px'})
    // }
    
})