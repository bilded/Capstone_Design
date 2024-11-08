const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

const showImage = (index) => {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
};

leftButton.addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

rightButton.addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});
