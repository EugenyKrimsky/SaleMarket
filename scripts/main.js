document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.clothes-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 4,
    });   
    const menuBtn = $('.btn-search'),
    menu = $('.input-search');

    menuBtn.on('click', function() {
        if ( $(this).hasClass('is-active') ) {
            $(this).removeClass('is-active');
            menu.slideUp();
        } else {
            $(this).addClass('is-active');
            menu.slideDown();
        }
    });
    
    $(document).click(function (e) {
        if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.slideUp();
            menuBtn.removeClass('is-active');
        };

});
    function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярного выражения
    // ищем упоминание названия браузера
    if (ua.search(/Chrome/) > 0) return 'Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'IE';
    return false;
    }

    if (get_name_browser() == "Safari" || get_name_browser() == "Firefox" || get_name_browser() == "IE") {
        $('.btn-text').css('font-size', '17px');  
        $('.heading-red').css('color', '#D02B38');
        $('.heading-red').css('text-decoration', 'none');
    
    } 
    else if (get_name_browser() == "Safari") {
        $('.btn-text').css('padding', '13px 32px 13px 32px')
        $('.btn-text').css('font-size', '16px');  
    }
});