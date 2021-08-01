$(document).ready(function () {


    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            800: {
                items: 2,
                nav: false,
                dots: true,
            },
            1000: {
                items: 4,
                nav: false,
                dots: true,
            }
        }
    });
    // owl.on('drag.owl.carousel', function (event) {
    //     document.ontouchmove = function (e) {
    //         e.preventDefault()
    //     }
    // })



    $('.menu-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn-active');
    })




    new WOW().init();
});

