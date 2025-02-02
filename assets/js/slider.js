let currentIndex = 0;
const sliderWrapper = document.getElementById('sliderWrapper');
const images = Array.from(sliderWrapper.children);
const totalImages = images.length;

function moveSlider(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to open full-screen mode with slider
function openFullscreen(index) {
    currentIndex = index;

    // Create full-screen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    // Create image element
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = images[currentIndex].src;
    fullscreenImg.classList.add('fullscreen-image');

    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.innerHTML = "&#10094;";
    prevButton.classList.add('fullscreen-prev');
    prevButton.onclick = function () { changeFullscreenImage(-1); };

    const nextButton = document.createElement('button');
    nextButton.innerHTML = "&#10095;";
    nextButton.classList.add('fullscreen-next');
    nextButton.onclick = function () { changeFullscreenImage(1); };

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = "&#10006;"; // 'X' icon
    closeButton.classList.add('fullscreen-close');
    closeButton.onclick = function () { document.body.removeChild(fullscreenContainer); };

    // Append elements
    fullscreenContainer.appendChild(closeButton);
    fullscreenContainer.appendChild(prevButton);
    fullscreenContainer.appendChild(fullscreenImg);
    fullscreenContainer.appendChild(nextButton);
    document.body.appendChild(fullscreenContainer);

    // Close full-screen mode on click outside the image
    fullscreenContainer.onclick = function (e) {
        if (e.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer);
        }
    };
}


// Function to change the full-screen image
function changeFullscreenImage(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    document.querySelector('.fullscreen-image').src = images[currentIndex].src;
}

function openVideoFullscreen() {
    let video = document.getElementById("crimeVideo");

    // Create full-screen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    // Create video element
    const fullscreenVideo = document.createElement('video');
    fullscreenVideo.src = video.src;
    fullscreenVideo.controls = true;
    fullscreenVideo.autoplay = true;
    fullscreenVideo.classList.add('fullscreen-video');

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = "&#10006;"; // 'X' icon
    closeButton.classList.add('fullscreen-close');
    closeButton.onclick = function () {
        document.body.removeChild(fullscreenContainer);
    };

    // Append elements
    fullscreenContainer.appendChild(closeButton);
    fullscreenContainer.appendChild(fullscreenVideo);
    document.body.appendChild(fullscreenContainer);

    // Close full-screen mode on clicking outside the video
    fullscreenContainer.onclick = function (e) {
        if (e.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer);
        }
    };
}
