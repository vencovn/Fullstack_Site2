// Jquery - floating menu
$(function() {

    let nav = $(".jsNav");
    let denis__novik = $(".jsDenis__novik");
    let denis__novikH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        denis__novikH = denis__novik.innerHeight();
        scrollPos = $(this).scrollTop();

        if ( scrollPos > denis__novikH ) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }

        // console.log(scrollPos);
    });

});// Jquery - floating menu

// burger menu

const burgerMenu = document.querySelector('.jsBurger');
const navMenu = document.querySelector('.jsNav');
if (burgerMenu){
    const burgerMenu = document.querySelector('.jsBody');
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    });
}

// Splider


new Splide( '#splide-1' ).mount();

new Splide( '#splide-2', {
    perPage    : 2,
    breakpoints: {
        676: {
            perPage    : 1,
        },
    },
} ).mount();// Splider


