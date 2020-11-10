$(function () {

    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                dots: true,
                slidesToShow: 1,
            }
        },
        ]
    });

    $('.technology-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 970,
            settings: {
                dots: true,
                slidesToShow: 1,
            }
        },

        ]
    });

    $('.technology-slider-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 970,
            settings: {
                dots: true,
                slidesToShow: 1,
            }
        },

        ]
    });

    $('.technology-slider-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 970,
            settings: {
                dots: true,
                slidesToShow: 1,
            }
        },

        ]
    });
});

$(document).ready(function () {
    $('.work-gallery__open').click(function (event) {
        $('.work-gallery-2').toggleClass('d-none');
    });
});
