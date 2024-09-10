window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar'); // Use class selector instead of ID
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
   
});