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

$('.clos-sort, .btn-menu-menu, .btn-contact-menu').click(function() {
    $(this).toggleClass('clos-sort-plus');
});


//4 фото в категориях
$('.category-content-thumb > .product-layout > .product-thumb').each(function(e) {

    e += 1;

    $(this).parent().attr({
        'class': 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-6 data-bal="element-bal"'

    });
});

$('.category-content-thumb > .product-layout > .product-thumb > h3, .latest-blog p, .pm-review-thumb .caption .text-review').css('height', '').equalHeights();