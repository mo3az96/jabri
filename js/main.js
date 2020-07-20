$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15.839" height="26" viewBox="0 0 15.839 26"><path id="Path_91" data-name="Path 91" d="M1638.6,383.74l12.928,11.588L1638.6,406.916" transform="translate(-1637.187 -382.328)" fill="none"  stroke-linecap="round" stroke-width="2"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="15.839" height="26" viewBox="0 0 15.839 26"><path id="Path_91" data-name="Path 91" d="M1651.527,383.74,1638.6,395.328l12.928,11.588" transform="translate(-1637.101 -382.328)" fill="none"  stroke-linecap="round" stroke-width="2"/></svg>'],
    });
    ///////// **cats Slider** ///////// 
    if ($(window).width() <= 1199) {
        $('.cats').addClass("owl-carousel")
        $('.cats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    maegin: 15,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
            }
        });
    }
    ///////// **products Slider** ///////// 
    $('.productsSlider').owlCarousel({
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15.839" height="26" viewBox="0 0 15.839 26"><path id="Path_91" data-name="Path 91" d="M1638.6,383.74l12.928,11.588L1638.6,406.916" transform="translate(-1637.187 -382.328)" fill="none" stroke-linecap="round" stroke-width="2"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="15.839" height="26" viewBox="0 0 15.839 26"><path id="Path_91" data-name="Path 91" d="M1651.527,383.74,1638.6,395.328l12.928,11.588" transform="translate(-1637.101 -382.328)" fill="none" stroke-linecap="round" stroke-width="2"/></svg>'],
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        }
    });
    ///////// **cats Slider** ///////// 
    if ($(window).width() <= 991) {
        $('.feats').addClass("owl-carousel")
        $('.feats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    maegin: 15,
                },
                767: {
                    items: 2,
                },
            }
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **search** /////////
    if ($(window).width() <= 991) {
        $(".mo-search-ico").click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        })
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(500);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 767) {
        $('.mo-menu-ico').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});