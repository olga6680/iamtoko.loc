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



var $menu = $(".header__nav");

$(window).scroll(function() {
    if ($(this).scrollTop() > 29 && $menu.hasClass("default")) {
        $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 29 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
    }
}); //scroll


/*--------- большой слайдер на главной ---*/
$('#slideshow0').swiper({
    mode: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    effect: 'fade',
    autoplay: 1000000,
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