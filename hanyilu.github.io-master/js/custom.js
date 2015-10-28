(function () {
    'use strict';

    var body = document.body;
    var burgerContain = document.getElementsByClassName('burger-contain')[0];
    var burgerNav = document.getElementsByClassName('burger-nav')[0];
    var burgerBrand = document.getElementsByClassName('burger-brand')[0];

    burgerContain.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav, burgerBrand].forEach(function (e) {
            e.classList.toggle("open");
        });
    }, false);

    $('.burger-link').on('click', function () {
        $('.open').removeClass('open');

    });
    

    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
    });


    //$('#como-funciona').scrollTo(document.getElementById('funcionalidades'), 800);
})();