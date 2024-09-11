function toggleFullscreen(imgElement) {
    if (imgElement.classList.contains('fullscreen')) {
        imgElement.classList.remove('fullscreen');
        document.body.classList.remove('no-scroll');
    } else {
        imgElement.classList.add('fullscreen');
        document.body.classList.add('no-scroll');
    }
}

document.querySelectorAll('#imageGallery img').forEach(img => {
    img.addEventListener('click', () => toggleFullscreen(img));
});