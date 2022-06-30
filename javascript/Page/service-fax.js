var _Swiper;

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var banner_swiper2;

function swiper_banner2() {
    banner_swiper2 = new Swiper('.swiper-container4', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 400000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

$(document).ready(function () {
    // 배너 슬라이드 실행
    swiper_banner2();
});