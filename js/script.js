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
// $(document).ready(function() {

//     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//         $('.overlay').fadeIn(1000);
//         $('.modal').slideDown(1000);
//     });

//     $('.close').click(function() {
//         $('.modal').slideUp(1000);
//         $('.overlay').fadeOut(1000);
//     });

// });