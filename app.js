const madFace = document.querySelector('.closed');
const eyerollFace = document.querySelector('.open');

// Add Event Listener

madFace.addEventListener('click', () => {
    if (eyerollFace.classList.contains('open')) {
        eyerollFace.classList.add('active');
        madFace.classList.remove('active');
    }
});

eyerollFace.addEventListener('click', () => {
    if (madFace.classList.contains('closed')) {
        madFace.classList.add('active');
        eyerollFace.classList.remove('active');
    }
});