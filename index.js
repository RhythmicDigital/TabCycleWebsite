document.querySelectorAll('.lightbox-img').forEach(function(image) {
    image.addEventListener('click', function() {
      const imgSrc = image.getAttribute('data-src');
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'flex';
    });
  });
  
  document.getElementById('lightbox').addEventListener('click', function () {
    this.style.display = 'none';
  });