(function(d) {
    const trackElement = d.getElementById('track');
    let initX;
    let currentLeft = 0;
    let offset = 0;
    let carouselScroll = false

    trackElement.addEventListener('touchstart', touchStart);
    trackElement.addEventListener('touchmove', touchMove);
    trackElement.addEventListener('touchend', touchEnd);

    function touchStart(event) {
        console.log('start');
        initX = event.touches[0].clientX;
        setTimeout(() => {
            trackElement.addEventListener('touchmove', (event) => {
                const clientX = event.touches[0].clientX;
                if(Math.abs(clientX - initX) > 5) carouselScroll = true
            }, { once: true })
        }, 10)
    }

    function touchMove(event) {
        if(!carouselScroll) return
        event.preventDefault();
        const clientX = event.touches[0].clientX;
        offset = clientX - initX;
        trackElement.style.left = currentLeft + offset + 'px'; 
    }

    function touchEnd() {
        console.log('end');
        currentLeft += offset;
        offset = 0;
        carouselScroll = false;
    }
}(document));
