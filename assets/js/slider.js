let currentIndex = 0;
    const sliderWrapper = document.getElementById('sliderWrapper');
    const images = sliderWrapper.children;
    const totalImages = images.length;

    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
