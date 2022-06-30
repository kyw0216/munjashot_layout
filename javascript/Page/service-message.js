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

var banner_swiper1;
var banner_swiper2;

var bullet = [
    `<p class="title">SMS</p>
    <p class="content">90byte 이내 단문형 문자</p>`,
    `<p class="title">LMS</p>
    <p class="content">2,000byte 이내 장문형 문자</p>`,
    `<p class="title">MMS</p>
    <p class="content">2,000byte 이내 이미지 포함 문자</p>`,
    `<p class="title">MMS</p>
    <p class="content">2,000byte 이내 바코드/QR코드 포함 문자</p>`
];

function swiper_banner1() {
    banner_swiper1 = new Swiper('.swiper-container1', {
        effect: "fade",
        fadeEffect: { 
        crossFade: true 
        },
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 500,
        autoplay: {
            delay: 4000000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="colmun_wrapper pg_box ${className}">${bullet[index]}</div>`
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },
    });
}

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
    swiper_banner1();
    swiper_banner2();
});