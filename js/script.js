$(document).ready(function() {
    $('a[href*="sheldure"], .main_btna text-center, .col-sm-3').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').animate(
            {
                opacity: 'toggle',
                height: 'toggle',
            }, 1000
        );
    });
    
    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').animate(
            {
                opacity: 'toggle',
                height: 'toggle',
            }, 1000
        );
    });
});