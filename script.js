new Splide( '#splide-1' ).mount();

new Splide( '#splide-2', {
    perPage    : 2,
    breakpoints: {
        676: {
            perPage    : 1,
        },
    },
} ).mount();
