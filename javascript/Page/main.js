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

var banner_swiper;
var banner_swiper2;

function swiper_banner() {
    banner_swiper = new Swiper('.main_content1', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}

function swiper_banner2() {
    banner_swiper2 = new Swiper('.swiper-container6', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

$(document).ready(function () {
    // 배너 슬라이드 실행
    swiper_banner();
    swiper_banner2();

    $(".tab_title li").click(function () {
        var idx = $(this).index();

        console.log(idx);
        console.log($(".tab_title li").eq(idx));

        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");

        $(".tab_cont > div").removeClass("on");
        $(".tab_cont div").eq(idx).addClass("on");

        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).css("display", "flex");
    });

    $(".main_content7 .image_area .row_wrapper .row3 .box").click(function () {

        var idx = $(this).index();

        console.log(idx);

        $(".main_content7 .image_area .row_wrapper .row2 .content").removeClass("on").hide();
        $(".main_content7 .image_area .row_wrapper .row2 .content").eq(idx).addClass("on").fadeIn(300);

    });

});