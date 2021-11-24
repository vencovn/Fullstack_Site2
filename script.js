new Splide( '#splide-1' ).mount();

new Splide( '#splide-2', {
    perPage    : 4,
    breakpoints: {
        375: {
            perPage    : 1,
        },
    },
} ).mount();
