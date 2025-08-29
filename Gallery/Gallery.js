// script.js

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let images = Array.from(galleryItems).map(img => img.src);

// Open lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex];
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next/Prev navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-buttons button');
const gallery = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-buttons .active').classList.remove('active');
    btn.classList.add('active');
    const category = btn.getAttribute('data-filter');

    gallery.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Update images array after filtering
    images = Array.from(document.querySelectorAll('.gallery-item img'))
                  .filter(img => img.parentElement.style.display !== 'none')
                  .map(img => img.src);
  });
});
