window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        html = document.querySelector('html'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        html.classList.toggle('html_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            body.classList.toggle('body_active');
        });
    });
});


/*фиксированное меню */
var $menu = $(".header__nav");

$(window).scroll(function() {
    if ($(this).scrollTop() > 29 && $menu.hasClass("default")) {
        $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 29 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
    }
});





/*--------- большой слайдер на главной ---*/
$('#slideshow0').swiper({
    mode: 'horizontal',
    effect: 'fade',
    autoplay: 100000,
    autoplayDisableOnInteraction: true,
    loop: true
});

/*--------- слайдер student ---*/
$('#slideshow1').swiper({
    mode: 'horizontal',
    effect: 'fade',
    autoplay: 5000,
    autoplayDisableOnInteraction: true,
    loop: true
});




/*--------- активный пункт меню  ---*/

jQuery(document).ready(function($) {
    var url = document.location.href;
    $.each($(".menu a"), function() {
        if (this.href == url) {
            $(this).addClass('active');
        };
    });
});

$('#form-callbackfooter-footer #button_send_callbackfooter_footer').on('click', function() {
    var chatid = "1733030241";
    var token = "1719065031:AAEyWvsbYXutbKYssfV74KqapJz83KC3hxg";
    var text = "Текст для <b>нашего</b> бота";
    otpravka(token, text, chatid);

    function otpravka(token, text, chatid) {
        var z = $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
            data: "parse_mode=HTML&text=" + encodeURIComponent(text),
        });
    };
});

$('.swiper-container1').swiper({
    mode: 'horizontal',
    autoplay: 30000,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    //pagination: '.carousel{{ module }}',
    pagination: false,
    paginationClickable: false,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',

    // Default parameters
    slidesPerView: 5,

    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 1200px
        1200: {
            slidesPerView: 3
        },
        // when window width is <= 575px
        575: {
            slidesPerView: 1
        }
    }

});

$(function() {
    $('.product-thumb h4, .latest-blog p, .pm-review-thumb .caption .text-review').css('height', '').equalHeights();
    $('.swiper-slide > .rewiev-wrapper > .caption > .text-rewiev, .blog-blog > .row > #content > .blog > .row > .blog-item > .summary > p').css('height', '').equalHeights();
});