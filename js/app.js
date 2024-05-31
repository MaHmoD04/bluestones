const barBtn = document.querySelector(".bars");
const listLink = document.querySelector(".list-link");
barBtn.addEventListener("click", function () {
  if(listLink.classList.contains('show-btn')) {
    listLink.classList.remove('show-btn');
  } else {
    listLink.classList.add('show-btn');
  }
});


//carousel
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
});


//country select code
$(document).ready(function() {
  $('.js-example-basic-single').select2();
});
