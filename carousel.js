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
        const initY =  event.touches[0].clientY;
        console.log(initY)
        setTimeout(() => {
            trackElement.addEventListener('touchmove', (event) => {
                const offsetY = event.touches[0].clientY - initY;
                const offsetX = event.touches[0].clientX - initX;
                const corner = Math.atan(Math.abs(offsetY)/Math.abs(offsetX)) * 180 / Math.PI;
                console.log('y: ' + offsetY)
                console.log('x: ' + offsetX)
                console.log(corner)
                if( corner < 80 ) {
                    event.preventDefault()
                    carouselScroll = true;
                }
            }, { once: true })
        }, 0)
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
