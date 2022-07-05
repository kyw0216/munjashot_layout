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
    `<div class="column_wrapper info_title">
        <p>높은 도달</p>
        <p>성공률</p>
    </div>
    <div class="row_wrapper icon_content">
        <img class="icon_img" src="../image/service/icon_rate_on.png">
    </div>`,
    `<div class="column_wrapper info_title">
        <p>발송 실패 건</p>
        <p>자동환급</p>
    </div>
    <div class="row_wrapper icon_content">
        <img class="icon_img" src="../image/service/icon_refund_on.png">
    </div>`,
    `<div class="column_wrapper info_title">
        <p>국가별</p>
        <p>언어 전송 가능</p>
    </div>
    <div class="row_wrapper icon_content">
        <img class="icon_img" src="../image/service/icon_global_on.png">
    </div>`
];

function swiper_banner1() {
    banner_swiper1 = new Swiper('.swiper-container2', {
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