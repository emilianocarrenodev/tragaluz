import './scss/style.scss';
import { Modal } from 'bootstrap';

import { WOW } from 'wowjs';

import Swiper, { Autoplay, Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Thumbs, EffectFade]);

/*Se inicializa el plugin para las animaciones*/
var wow = new WOW({
    live: false,
    scrollContainer: null
});

/*Todos los "load" cargan los bloques recurrentes*/
$('header').load("header.html");
$('footer').load("footer.html", function() {
    wow.init();
});

/*Script para el slider del home*/
if ($.contains(document.body, document.getElementById('slider-main'))) {

    var mySwiper = new Swiper('#slider-main', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();