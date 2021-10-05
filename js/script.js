jQuery('.drawer_icon').on('click', function(e) { //クリックされた時の動きを書く//
    e.preventDefault();

    jQuery('.drawer_icon').toggleClass('is-active');
    jQuery('.drawer_content').toggleClass('is-active');
    jQuery('.drawer_background').toggleClass('is-active');

    return false;
});

new WOW().init();

jQuery('a[href^="#"]').on('click', function() { 
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this). attr('href');
    var position = 0;
    if ( id != '#') {
      position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);

    $(".drawer_icon").removeClass("is-active");
    $(".drawer_content").removeClass("is-active");
    $(".drawer_background").removeClass("is-active");
});