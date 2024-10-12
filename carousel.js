(function(d) {
    const trackElement = d.getElementById('track');
    let initX;
    let currentLeft = 0;
    let offset = 0;

    trackElement.addEventListener('touchstart', touchStart);
    trackElement.addEventListener('touchmove', touchMove);
    trackElement.addEventListener('touchend', touchEnd);

    function touchStart(event) {
        console.log('start');
        initX = event.touches[0].clientX;
    }

    function touchMove(event) {
        const currentX = event.touches[0].clientX;
        offset = currentX - initX;
        trackElement.style.left = currentLeft + offset + 'px'; 
    }

    function touchEnd() {
        console.log('end');
        currentLeft += offset;
        offset = 0;
    }
}(document));
