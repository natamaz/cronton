$(document).ready(function(){


    <!-- Слайдер-->
    $('.specialist_slider').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,

        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {

                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1600,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    });

    $('.certificate_slider').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {

                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1600,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    <!-- конец Слайдер-->
});
$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    });

});