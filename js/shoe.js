// banner animation
const images2 = [
    'images/shoe1.png',
    'images/shoe2.png',
    'images/shoe3.png',
    'images/shoe4.png',
    'images/shoe2.png',
    'images/shoe3.png',
    'images/shoe1.png',
];

let imgIndex = 0;
const imgE2 = document.getElementById('shoe-img');

setInterval(() => {
    if (imgIndex === images2.length) {
        imgIndex = 0;
    }
    const imgUr2 = images2[imgIndex];
    console.log(imgIndex, imgUr2);

    imgE2.setAttribute('src', imgUr2);
    imgE2.classList.add('fade-in-out'); // Add the CSS class for animation
    imgIndex++;
}, 1000);