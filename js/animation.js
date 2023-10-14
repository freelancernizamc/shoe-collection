// banner animation
const images = [
    'images/banner.png',
    'images/banner2.png',
    'images/banner3.png',
    'images/banner.png',
    'images/banner2.png',
    'images/banner.png',
    'images/banner3.png'
];

let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl);
    imgE1.classList.add('fade-in-out'); // Add the CSS class for animation
    imgIndex++;
}, 1000);