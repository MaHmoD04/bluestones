const barBtn = document.querySelector(".bars");
const listLink = document.querySelector(".list-link");
barBtn.addEventListener("click", function () {
  if (listLink.style.display === 'none' || listLink.style.display === '') {
    listLink.style.display = 'flex';
  } else {
    listLink.style.display = 'none';
  }
});

//carousel
const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
});

//country select code
$(document).ready(function () {
  $(".js-example-basic-single").select2();
});
