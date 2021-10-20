window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        html = document.querySelector('html'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger'),
        fixed = document.querySelector('.fixed');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        html.classList.toggle('html_active');
        fixed.classList.toggle('fixed_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            fixed.classList.toggle('fixed_active');
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

$(function() {



    //4 фото в категориях
    $('.category-content-thumb > .product-layout > .product-thumb').each(function(e) {

        e += 1;

        $(this).parent().attr({
            'class': 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12 data-bal="element-bal"'

        });
    });

    $('#content .category-content-thumb .product-layout:nth-child(8)').after($('#product-category .banner-pro'));


    //Sale popup и Email popup
    $('.button-sale-popup, .button-news-popup').magnificPopup({
        mainClass: 'mfp-zoom-in',
        removalDelay: 500
    });

    $('.button-salepopup').on('click', function() {
        $('.sale-popup, .news-popup').fadeOut();
        $.magnificPopup.close();
    });

    $('.button-newspopup, .button-text-home-center').on('click', function() {
        $('.sale-popup, .news-popup').fadeOut();
        $('.form-news-popup').fadeIn();
    });

    $('.newsletter_box input[name=\'email\']').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            $('#form-newspopup #button-subscribe, #button-subscribe').trigger('click');
        }
    });

    $('#form-newspopup #button-subscribe, #button-subscribe').on('click', function() {
        var success_message = $('#success_message').val()
        $.ajax({
            url: 'index.php?route=product/category/subscribe',
            type: 'post',
            dataType: 'json',
            data: 'email=' + encodeURIComponent($('input[id=\'email\']').val()),
            beforeSend: function() {
                $('#form-newspopup #button-subscribe, #button-subscribe').button('loading');
            },
            complete: function() {
                $('#form-newspopup #button-subscribe, #button-subscribe').button('reset');
            },
            success: function(json) {
                $('.text-success, .text-danger').remove();
                if (json['error']) {
                    $('#respond').after('<div class="text-success text-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
                    setTimeout(function() {
                        $('.text-danger').fadeOut('fast');
                    }, 2000);
                }
                if (json['success']) {
                    $('#respond').after('<div class="text-success"><i class="fa fa-check-circle"></i> ' + success_message + '</div>');
                    $.cookie('newsletter_already_added', 1, { expires: 14, path: '/' });
                    setTimeout(function() {
                        $.magnificPopup.close();
                    }, 1900);
                    $('input[id=\'email\']').val('');
                    setTimeout(function() {
                        $('.text-success').fadeOut('fast');
                    }, 2000);
                }
            }
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

    $('.button-sale-popup, .button-news-popup').on('click', function() {
        $('.sale-popup, .news-popup').fadeIn();
    });

    $('.clos-sort, .btn-menu-menu, .btn-contact-menu').click(function() {
        $(this).toggleClass('clos-sort-plus');
    });

    $('.swiper-slide > .rewiev-wrapper > .caption > .text-rewiev, .blog-blog > .row > #content > .blog > .row > .blog-item > .summary > p').css('height', '').equalHeights();

    //Купить в один клик
    $('.product-layout > .product-thumb').each(function(e) {


        var $easyzoom = $('.easyzoom').easyZoom();
        // Setup thumbnails example
        var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

        $('.thumbnails').on('click', 'a', function(e) {
            var $this = $(this);
            e.preventDefault();
            // Use EasyZoom's `swap` method
            api1.swap($this.data('standard'), $this.attr('href'));
        });

    });


    $('.product-thumb h3, .latest-blog p, .pm-review-thumb .caption .text-review').css('height', '').equalHeights();

    // при нажатии на кнопку scrollup
    $('#product-product #product .form-group:nth-child(3) .img-thumbnail, .button-scroll, .scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


});

// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 400) {
        // то сделать кнопку scrollup видимой
        $('.scrollup, .button-coll-side').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup, .button-coll-side').fadeOut();
    }

});